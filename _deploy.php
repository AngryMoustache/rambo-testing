<?php

namespace Deployer;

require 'recipe/laravel.php';
require 'recipe/rsync.php';

// Project name
set('application', 'graahk.dev');
set('repository', 'https://github.com/AngryMoustache/rambo-testing.git');
set('default_stage', 'production');

add(
    'rsync',
    [
        'exclude' => [
            '.git',
            'deploy.php',
            'node_modules',
            '/resources/lang',
            '.env',
            'bootstrap/cache/*',
        ],
    ]
);

// Shared files/dirs between deploys
add(
    'shared_files',
    [
        'public/.htaccess',
        'public/.htpasswd',
    ]
);

set('writable_dirs', []);

// Hosts
host('production')
    ->hostname('46.226.109.81')
    ->user('admin')
    ->set('deploy_path', '~/')
    ->set('rsync_src', '.')
    ->set('rsync_dest', '{{release_path}}')
    ->stage('production');

// Tasks
task('reload:php-fpm', function () {
    run('sudo service php7.4-fpm restart');
});

task('deploy', [
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'rsync',
    'deploy:shared',
    'deploy:writable',
    'artisan:storage:link',
    'artisan:view:cache',
    'artisan:config:cache',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
])->desc('Deploy your project');

desc('Clear cache');
task('artisan:optimize:clear', function () {
    run('{{bin/php}} {{release_path}}/artisan optimize:clear');
})->once();

desc('Public storage link');
task('artisan:storage:link', function () {
    run('{{bin/php}} {{release_path}}/artisan storage:link');
})->once();

desc('Dump autoload');
task('composer:dumpautoload', function () {
    run('cd {{release_path}} && {{bin/composer}} dump-autoload -o');
})->once();

task('deploy:update_code', ['rsync']);

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

after('deploy:shared', 'composer:dumpautoload');
before('deploy:symlink', 'artisan:migrate');
before('deploy:symlink', 'artisan:storage:link');
after('deploy:symlink', 'reload:php-fpm');
after('deploy:symlink', 'artisan:optimize:clear');

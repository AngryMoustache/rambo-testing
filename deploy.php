<?php
namespace Deployer;

require 'recipe/laravel.php';
require 'recipe/rsync.php';

// Project name
set('application', 'graahk.dev');

// Project repository
set('repository', 'https://github.com/AngryMoustache/rambo-testing.git');

// Shared files/dirs between deploys
add('shared_files', [
    'public/.htaccess',
    'public/.htpasswd',
]);

add('shared_dirs', [
    // 'storage/app',
]);

add('rsync', [
    'exclude' => [
        '.git',
        'deploy.php',
        'node_modules',
        '/resources/lang',
        '.env',
        'bootstrap/cache/*',
    ],
]);

// Writable dirs by web server
add('writable_dirs', []);

// Hosts
host('graahk.dev')
    ->user('admin')
    ->set('deploy_path', '/var/www/graahk.dev')
    ->multiplexing(false);

// Tasks
task('build', function () {
    run('cd {{release_path}} && build');
});

// [Optional] if deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');

// Migrate database before symlink new release.
before('deploy:symlink', 'artisan:migrate');

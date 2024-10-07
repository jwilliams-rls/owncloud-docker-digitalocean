<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitddc31e81eca2feabca413e2c67fdacbb
{
    public static $prefixLengthsPsr4 = array (
        'R' => 
        array (
            'Rowbot\\URL\\' => 11,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Rowbot\\URL\\' => 
        array (
            0 => __DIR__ . '/..' . '/rowbot/url/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitddc31e81eca2feabca413e2c67fdacbb::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitddc31e81eca2feabca413e2c67fdacbb::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitddc31e81eca2feabca413e2c67fdacbb::$classMap;

        }, null, ClassLoader::class);
    }
}

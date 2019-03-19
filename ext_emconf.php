<?php

/**
 * Extension Manager/Repository config file for ext "eric_yee".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'Eric Yee',
    'description' => 'Eric Yee Personal Website',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '8.7.0-9.5.99',
            'fluid_styled_content' => '8.7.0-9.5.99',
            'rte_ckeditor' => '8.7.0-9.5.99'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'IdeasBeyond\\EricYee\\' => 'Classes'
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Eric Yee',
    'author_email' => 'gojincorp@hotmail.com',
    'author_company' => 'Ideas Beyond',
    'version' => '1.0.0',
];

<?php
defined('TYPO3_MODE') || die();

call_user_func(function()
{
    /**
     * Temporary variables
     */
    $tempColumns = array(
        'subheader' => [
            'exclude' => true,
            'label' => 'LLL:EXT:eric_yee/Resources/Private/Language/Backend.xlf:accordion_item.subheader',
            'config' => [
                'type' => 'input',
                'size' => 50,
                'eval' => 'trim,required'
            ]
        ]  
    );
    
    /**
     * Add field to TCA
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addTCAcolumns(
        'tx_bootstrappackage_accordion_item',
        $tempColumns);
    
    /**
     * Add field to TCA
     */
    \TYPO3\CMS\Core\Utility\ExtensionManagementUtility::addToAllTCAtypes(
        'tx_bootstrappackage_accordion_item',
        'subheader',
        '',
        'after:header');
    
});

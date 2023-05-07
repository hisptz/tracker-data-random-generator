import {Program} from "@hisptz/dhis2-utils";


export const program = {
    "name": "HIV CS - HIV Case Surveillance",
    "id": "Xh88p1nyefp",
    "programStages": [
        {
            "name": "Initial Case Report",
            "id": "K5ac7u3V5bB",
            "programStageDataElements": [
                {
                    "dataElement": {
                        "name": "HIV CS - Positive Date",
                        "id": "fxXDe8OZ86q",
                        "valueType": "DATE"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Age at Diagnosis",
                        "id": "zsM4K8kNPSo",
                        "valueType": "NUMBER"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Vertical transmission",
                        "id": "wslSIEQi8ab",
                        "valueType": "BOOLEAN"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Type of community-level testing",
                        "id": "Q4X7sPYqzNS",
                        "valueType": "TEXT",
                        "optionSet": {
                            "options": [
                                {
                                    "code": "MOBILE",
                                    "name": "Mobile testing (e.g. through vans or temporary testing facilities)",
                                    "id": "jgRnZchv8aU"
                                },
                                {
                                    "code": "VOLUNTARYCTC",
                                    "name": "Voluntary Counselling and Testing centres (not within a health facility setting)",
                                    "id": "RFG1IXh245H"
                                },
                                {
                                    "code": "OTHERCOMMUNITY",
                                    "name": "Other community based testing",
                                    "id": "beyQ3K1XU0A"
                                }
                            ]
                        }
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Facility level testing entry point",
                        "id": "AX3jpeTGpqz",
                        "valueType": "TEXT",
                        "optionSet": {
                            "options": [
                                {
                                    "code": "PROVIDERINITIATED",
                                    "name": "Provider-initiated tested in a clinic or emergency facility",
                                    "id": "LRISko0xlo4"
                                },
                                {
                                    "code": "ANTENATALCLINIC",
                                    "name": "Antenatal care clinic",
                                    "id": "kfDiSyRDHjU"
                                },
                                {
                                    "code": "VOLUNTARYCOUNSELLING",
                                    "name": "Voluntary Counselling and Testing (within a health facility setting)",
                                    "id": "fYwHEB3haUV"
                                },
                                {
                                    "code": "FAMILYPLANNING",
                                    "name": "Family planning clinic",
                                    "id": "IXc9dphoKLN"
                                },
                                {
                                    "code": "OTHERFACILITY",
                                    "name": "Other facility-level testing",
                                    "id": "HlHqSBvyHHS"
                                },
                                {
                                    "code": "TBCLINIC",
                                    "name": "TB clinic",
                                    "id": "hzeCABrgvi4"
                                }
                            ]
                        }
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Key population - Any",
                        "id": "oc3LGLXvR5V",
                        "valueType": "BOOLEAN"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Key population - Men who have sex with men",
                        "id": "kgJbXCGRSeM",
                        "valueType": "TRUE_ONLY"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Key population - Injection drug user",
                        "id": "OGGCNyv1f2T",
                        "valueType": "TRUE_ONLY"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Key population - Prisoner",
                        "id": "XzFZQwgWyia",
                        "valueType": "TRUE_ONLY"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Key population - Sex worker",
                        "id": "OpTMybEaYLS",
                        "valueType": "TRUE_ONLY"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Key population - Transgender",
                        "id": "HoxAE6Cv1IV",
                        "valueType": "TRUE_ONLY"
                    }
                }
            ]
        },
        {
            "name": "Visit",
            "id": "ang4CLldbIu",
            "programStageDataElements": [
                {
                    "dataElement": {
                        "name": "HIV CS - Viral Load Test Date",
                        "id": "v4K5u8wftrq",
                        "valueType": "DATE"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Viral Load Test Result",
                        "id": "EZAZ8aIV3kB",
                        "valueType": "NUMBER"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Previous Viral Load Value",
                        "id": "UiX8eZZl3Nt",
                        "valueType": "NUMBER"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Days of ART Provided",
                        "id": "ncsvQhFKcKc",
                        "valueType": "INTEGER_POSITIVE"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Last Day With ART",
                        "id": "EGjmPoKhHpM",
                        "valueType": "DATE"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - TPT Date Completed",
                        "id": "TQtuEvZ1eF6",
                        "valueType": "DATE"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - TPT Date Eligible",
                        "id": "TmAJxu1XNKh",
                        "valueType": "DATE"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - TPT Date Initiated",
                        "id": "Lu4jo7fSTb3",
                        "valueType": "DATE"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - TPT Regimen",
                        "id": "mUMvkV72WQZ",
                        "valueType": "TEXT",
                        "optionSet": {
                            "options": [
                                {
                                    "code": "1HP",
                                    "name": "1HP (one month of daily rifapentine plus isoniazid)",
                                    "id": "xPNDpfCXVko"
                                },
                                {
                                    "code": "3HP",
                                    "name": "3HP (three months of weekly rifapentine plus isoniazid)",
                                    "id": "TC75njTx33j"
                                },
                                {
                                    "code": "3RH",
                                    "name": "3RH (three months of daily rifampicin plus isoniazid)",
                                    "id": "SiIr8mhZ3K5"
                                },
                                {
                                    "code": "4R",
                                    "name": "4R (four months of daily rifampicin monotherapy)",
                                    "id": "aZzbD5woR7I"
                                },
                                {
                                    "code": "6H",
                                    "name": "6H (six months of daily isoniazid monotherapy)",
                                    "id": "YZcaclz2pjA"
                                },
                                {
                                    "code": "9H",
                                    "name": "9H (nine months of daily isoniazid monotherapy)",
                                    "id": "B9VLdolwAbX"
                                },
                                {
                                    "code": "INH-B6",
                                    "name": "Combination INH-B6-Cotrim (for the duration of INH specified)",
                                    "id": "n2IXuW44ysV"
                                },
                                {
                                    "code": "OTHERTPT",
                                    "name": "Other",
                                    "id": "Bbuq6iWwczn"
                                }
                            ]
                        }
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - TPT Eligibility",
                        "id": "HYEdbJEeJbz",
                        "valueType": "TRUE_ONLY"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Treatment Status",
                        "id": "rcUsYgOnlyF",
                        "valueType": "TEXT",
                        "optionSet": {
                            "options": [
                                {
                                    "code": "RETAINED",
                                    "name": "On ART",
                                    "id": "pkzPtYJa11c"
                                },
                                {
                                    "code": "DEAD",
                                    "name": "Death (documented)",
                                    "id": "WeEyIMERboR"
                                },
                                {
                                    "code": "TREATMENTSTOPPED",
                                    "name": "Refused (stopped) treatment",
                                    "id": "Pcl7hWI6pja"
                                },
                                {
                                    "code": "TRANSFEROUT",
                                    "name": "Transferred out",
                                    "id": "QZZol09tP8t"
                                },
                                {
                                    "code": "LTFU",
                                    "name": "Lost to follow up",
                                    "id": "R3obSEPtLzw"
                                }
                            ]
                        }
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Date of Treatment Initiation",
                        "id": "Lv3c5VSA9t3",
                        "valueType": "DATE"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Treatment Started",
                        "id": "c82CE0oy0Nj",
                        "valueType": "BOOLEAN"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Viral load <1000",
                        "id": "S4IJiirQVHY",
                        "valueType": "TRUE_ONLY"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - TPT restart treatment",
                        "id": "Bn9otKySZvP",
                        "valueType": "TRUE_ONLY"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Date of Death",
                        "id": "lWCjuohJSKB",
                        "valueType": "DATE"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Reason for visit",
                        "id": "ApNE5GlYotZ",
                        "valueType": "TEXT",
                        "optionSet": {
                            "options": [
                                {
                                    "code": "CLINICAL_VISIT",
                                    "name": "Clinical visit",
                                    "id": "JgLB3TDd6hA"
                                },
                                {
                                    "code": "ARV_PICKUP",
                                    "name": "Antiretroviral drug pick up",
                                    "id": "Y9zTLxmOdhE"
                                },
                                {
                                    "code": "ISSUES",
                                    "name": "Issues and concerns",
                                    "id": "yjPqtVfPe0M"
                                }
                            ]
                        }
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Status change date",
                        "id": "lRgSVYXi32H",
                        "valueType": "DATE"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Currently Pregnant",
                        "id": "DKk6bMlho01",
                        "valueType": "TRUE_ONLY"
                    }
                }
            ]
        },
        {
            "name": "Follow-up",
            "id": "UvYb6qJpQu0",
            "programStageDataElements": [
                {
                    "dataElement": {
                        "name": "HIV CS - Follow up Method",
                        "id": "FRRIujn3jHD",
                        "valueType": "TEXT",
                        "optionSet": {
                            "options": [
                                {
                                    "code": "SMS",
                                    "name": "Text message",
                                    "id": "jnljBOtLLGZ"
                                },
                                {
                                    "code": "PHONECALL",
                                    "name": "Phone",
                                    "id": "XVlMbRg6MzX"
                                },
                                {
                                    "code": "HOMEVISIT",
                                    "name": "Home Visit",
                                    "id": "yerPPxlAdIq"
                                },
                                {
                                    "code": "OTHER",
                                    "name": "Other",
                                    "id": "YQwZ6qwjJha"
                                }
                            ]
                        }
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Follow up Outcome",
                        "id": "uiBCTI2XL2m",
                        "valueType": "TEXT",
                        "optionSet": {
                            "options": [
                                {
                                    "code": "RESCHEDULED",
                                    "name": "Returning to clinic",
                                    "id": "I4YdNHiGE28"
                                },
                                {
                                    "code": "TRANSFERRED_OUT",
                                    "name": "Self-transferred out",
                                    "id": "dgGVR6FddWf"
                                },
                                {
                                    "code": "HOSPITALIZED",
                                    "name": "Hospitalized",
                                    "id": "RGUomSj7xW4"
                                },
                                {
                                    "code": "REFUSED_TO_RETURN",
                                    "name": "Refused to return",
                                    "id": "Kg4OvDVrv71"
                                },
                                {
                                    "code": "NORESPONSE",
                                    "name": "Not located",
                                    "id": "xBtbvFUE2vS"
                                },
                                {
                                    "code": "DIED_REPORTED",
                                    "name": "Died (reported)",
                                    "id": "HecjAjEsPCn"
                                },
                                {
                                    "code": "DIED_CONFIRMED",
                                    "name": "Confirmed Dead",
                                    "id": "SIXSBDnOIXj"
                                }
                            ]
                        }
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Follow-up Notes",
                        "id": "vAS6qdqF6Gf",
                        "valueType": "LONG_TEXT"
                    }
                },
                {
                    "dataElement": {
                        "name": "HIV CS - Follow up Reason",
                        "id": "NvMH0F4TKuc",
                        "valueType": "TEXT",
                        "optionSet": {
                            "options": [
                                {
                                    "code": "MISSED_CLINICAL_VISIT",
                                    "name": "Missed clinical care visit",
                                    "id": "OkhLuaXHVSf"
                                },
                                {
                                    "code": "MISSED_ARV_PICKUP",
                                    "name": "Missed medication pickup",
                                    "id": "zfHP7ulglAs"
                                },
                                {
                                    "code": "MISSED_VISIT_NONCLINICAL",
                                    "name": "Missed non-clinical visit",
                                    "id": "BSH1gFBMpu9"
                                },
                                {
                                    "code": "ART_NOT_STARTED",
                                    "name": "Did not initiate ART",
                                    "id": "fT7UM9cQHBf"
                                },
                                {
                                    "code": "HIV_INCONCLUSIVE",
                                    "name": "Inconclusive HIV status",
                                    "id": "bQPWEgWILFm"
                                },
                                {
                                    "code": "TEST_RESULTS",
                                    "name": "Test results received",
                                    "id": "o1d7m8Hz6Ze"
                                },
                                {
                                    "code": "OTHER_REASON",
                                    "name": "Other follow up reason (Specify)",
                                    "id": "X6TLDYOTlDl"
                                }
                            ]
                        }
                    }
                }
            ]
        }
    ],
    "programTrackedEntityAttributes": [
        {
            "trackedEntityAttribute": {
                "name": "First Name",
                "id": "sB1IHYu2xQT",
                "valueType": "TEXT"
            }
        },
        {
            "trackedEntityAttribute": {
                "name": "Surname",
                "id": "ENRjVGxVL6l",
                "valueType": "TEXT"
            }
        },
        {
            "trackedEntityAttribute": {
                "name": "Date of birth is estimated",
                "id": "Z1rLc1rVHK8",
                "valueType": "TRUE_ONLY"
            }
        },
        {
            "trackedEntityAttribute": {
                "name": "Date of birth",
                "id": "NI0QRzJvQ0k",
                "valueType": "DATE"
            }
        },
        {
            "trackedEntityAttribute": {
                "name": "Gender M, F, TG",
                "id": "Jt68iauILtD",
                "valueType": "TEXT",
                "optionSet": {
                    "options": [
                        {
                            "code": "MALE",
                            "name": "Male",
                            "id": "CCmTVwwDtak"
                        },
                        {
                            "code": "FEMALE",
                            "name": "Female",
                            "id": "sfwEiEAL3jd"
                        },
                        {
                            "code": "TG",
                            "name": "Transgender",
                            "id": "NewWFaxCL0f"
                        },
                        {
                            "code": "OTHER",
                            "name": "Other",
                            "id": "ZftBmTTvUyL"
                        }
                    ]
                }
            }
        },
        {
            "trackedEntityAttribute": {
                "name": "Home Address",
                "id": "Xhdn49gUd52",
                "valueType": "LONG_TEXT"
            }
        },
        {
            "trackedEntityAttribute": {
                "name": "Mobile phone number",
                "id": "fctSQp5nAYl",
                "valueType": "PHONE_NUMBER"
            }
        },
        {
            "trackedEntityAttribute": {
                "name": "Country of birth",
                "id": "gWTETHreVph",
                "valueType": "TEXT",
                "optionSet": {
                    "options": [
                        {
                            "code": "AF",
                            "name": "Afghanistan",
                            "id": "hGJnSu14S4H"
                        },
                        {
                            "code": "AX",
                            "name": "Aland Islands",
                            "id": "jNHN0pOchoB"
                        },
                        {
                            "code": "AL",
                            "name": "Albania",
                            "id": "Bh4wWzctSjb"
                        },
                        {
                            "code": "DZ",
                            "name": "Algeria",
                            "id": "fjla1buVNJ1"
                        },
                        {
                            "code": "AS",
                            "name": "American Samoa",
                            "id": "hYLZM1WibDG"
                        },
                        {
                            "code": "AD",
                            "name": "Andorra",
                            "id": "Vy2kZ2xdywD"
                        },
                        {
                            "code": "AO",
                            "name": "Angola",
                            "id": "SMRVOAezK6m"
                        },
                        {
                            "code": "AI",
                            "name": "Anguilla",
                            "id": "TAtDifm7RQ2"
                        },
                        {
                            "code": "AQ",
                            "name": "Antarctica",
                            "id": "PJlpC0ulmxS"
                        },
                        {
                            "code": "AG",
                            "name": "Antigua and Barbuda",
                            "id": "zbLeaXBzQ0r"
                        },
                        {
                            "code": "AR",
                            "name": "Argentina",
                            "id": "ywRcbgzfJPh"
                        },
                        {
                            "code": "AM",
                            "name": "Armenia",
                            "id": "LOaaG2lAIFa"
                        },
                        {
                            "code": "AW",
                            "name": "Aruba",
                            "id": "t54DjoTR2p6"
                        },
                        {
                            "code": "AU",
                            "name": "Australia",
                            "id": "yW6IdVQov4u"
                        },
                        {
                            "code": "AT",
                            "name": "Austria",
                            "id": "m5ziJSjzRPE"
                        },
                        {
                            "code": "AZ",
                            "name": "Azerbaijan",
                            "id": "ea6F8vmxRXr"
                        },
                        {
                            "code": "BS",
                            "name": "Bahamas",
                            "id": "kzAod6laMdd"
                        },
                        {
                            "code": "BH",
                            "name": "Bahrain",
                            "id": "iJ2Z9ipAEe6"
                        },
                        {
                            "code": "BD",
                            "name": "Bangladesh",
                            "id": "Tk7FMD1MasS"
                        },
                        {
                            "code": "BB",
                            "name": "Barbados",
                            "id": "ynsA4tpFPiu"
                        },
                        {
                            "code": "BY",
                            "name": "Belarus",
                            "id": "agD66qYjXBj"
                        },
                        {
                            "code": "BE",
                            "name": "Belgium",
                            "id": "cPIpkDRqE0s"
                        },
                        {
                            "code": "BZ",
                            "name": "Belize",
                            "id": "ihkgYyvIpoJ"
                        },
                        {
                            "code": "BJ",
                            "name": "Benin",
                            "id": "tbGOoDQGapm"
                        },
                        {
                            "code": "BM",
                            "name": "Bermuda",
                            "id": "ofZoh1cmVIS"
                        },
                        {
                            "code": "BT",
                            "name": "Bhutan",
                            "id": "TqHJcgfYYO7"
                        },
                        {
                            "code": "BO",
                            "name": "Bolivia (Plurinational State of)",
                            "id": "cFC9TG5T6rk"
                        },
                        {
                            "code": "BQ",
                            "name": "Bonaire, Sint Eustatius and Saba",
                            "id": "JEvbk1d5kZz"
                        },
                        {
                            "code": "BA",
                            "name": "Bosnia and Herzegovina",
                            "id": "W0yLTk0cm95"
                        },
                        {
                            "code": "BW",
                            "name": "Botswana",
                            "id": "HwxSk7Bydgv"
                        },
                        {
                            "code": "BV",
                            "name": "Bouvet Island",
                            "id": "QUDg3f2Vykg"
                        },
                        {
                            "code": "BR",
                            "name": "Brazil",
                            "id": "k7rCWMSHHnW"
                        },
                        {
                            "code": "IO",
                            "name": "British Indian Ocean Territory",
                            "id": "XPbtS9mdWu0"
                        },
                        {
                            "code": "BN",
                            "name": "Brunei Darussalam",
                            "id": "RhgmAKhAC5q"
                        },
                        {
                            "code": "BG",
                            "name": "Bulgaria",
                            "id": "OxCmeYyS27P"
                        },
                        {
                            "code": "BF",
                            "name": "Burkina Faso",
                            "id": "ysELYlzPrdm"
                        },
                        {
                            "code": "BI",
                            "name": "Burundi",
                            "id": "Tip7kcFjydR"
                        },
                        {
                            "code": "KH",
                            "name": "Cambodia",
                            "id": "ZMRxkXvOSHd"
                        },
                        {
                            "code": "CM",
                            "name": "Cameroon",
                            "id": "hYinhh33Smb"
                        },
                        {
                            "code": "CA",
                            "name": "Canada",
                            "id": "e73WCSot5Kz"
                        },
                        {
                            "code": "CV",
                            "name": "Cabo Verde",
                            "id": "UNQndlLuT6z"
                        },
                        {
                            "code": "KY",
                            "name": "Cayman Islands",
                            "id": "jg2D4zXeOEW"
                        },
                        {
                            "code": "CF",
                            "name": "Central African Republic",
                            "id": "oEo4sOKVbxo"
                        },
                        {
                            "code": "TD",
                            "name": "Chad",
                            "id": "RIN4O3DOJ7i"
                        },
                        {
                            "code": "CL",
                            "name": "Chile",
                            "id": "iyOIO7u3rp2"
                        },
                        {
                            "code": "CN",
                            "name": "China",
                            "id": "IoNVJbgYCgK"
                        },
                        {
                            "code": "CX",
                            "name": "Christmas Island",
                            "id": "cns3VhQOOLT"
                        },
                        {
                            "code": "CC",
                            "name": "Cocos (Keeling) Islands",
                            "id": "djBN4hznuVx"
                        },
                        {
                            "code": "CO",
                            "name": "Colombia",
                            "id": "Ap6L7fXfDeR"
                        },
                        {
                            "code": "KM",
                            "name": "Comoros",
                            "id": "ekNvWlcIqc6"
                        },
                        {
                            "code": "CG",
                            "name": "Congo",
                            "id": "gdaMM4iITdU"
                        },
                        {
                            "code": "CD",
                            "name": "Congo (Democratic Republic of the)",
                            "id": "TULAmCgYERZ"
                        },
                        {
                            "code": "CK",
                            "name": "Cook Islands",
                            "id": "df2Z1m4wiDH"
                        },
                        {
                            "code": "CR",
                            "name": "Costa Rica",
                            "id": "gUv8NQnweWA"
                        },
                        {
                            "code": "CI",
                            "name": "Cote d'Ivoire",
                            "id": "irKCzydHfvQ"
                        },
                        {
                            "code": "HR",
                            "name": "Croatia",
                            "id": "z90AdvvHWFs"
                        },
                        {
                            "code": "CU",
                            "name": "Cuba",
                            "id": "slZk3s6xPoM"
                        },
                        {
                            "code": "CW",
                            "name": "Curacao",
                            "id": "hH0Hy1NEJLt"
                        },
                        {
                            "code": "CY",
                            "name": "Cyprus",
                            "id": "LdQF1sPxdxF"
                        },
                        {
                            "code": "CZ",
                            "name": "Czech Republic",
                            "id": "EbLJJJfvsfk"
                        },
                        {
                            "code": "DK",
                            "name": "Denmark",
                            "id": "Dbq4nnM2YAX"
                        },
                        {
                            "code": "DJ",
                            "name": "Djibouti",
                            "id": "j18ViLv3bH0"
                        },
                        {
                            "code": "DM",
                            "name": "Dominica",
                            "id": "on9E0VYO7Fn"
                        },
                        {
                            "code": "DO",
                            "name": "Dominican Republic",
                            "id": "VEzuYX8hkAt"
                        },
                        {
                            "code": "EC",
                            "name": "Ecuador",
                            "id": "WAdbLIjOMui"
                        },
                        {
                            "code": "EG",
                            "name": "Egypt",
                            "id": "HStdRZPlcpd"
                        },
                        {
                            "code": "SV",
                            "name": "El Salvador",
                            "id": "LqtYpN1esYr"
                        },
                        {
                            "code": "GQ",
                            "name": "Equatorial Guinea",
                            "id": "D7X0HISqZFG"
                        },
                        {
                            "code": "ER",
                            "name": "Eritrea",
                            "id": "bC7LkeM89FC"
                        },
                        {
                            "code": "EE",
                            "name": "Estonia",
                            "id": "qEznaEpFnJr"
                        },
                        {
                            "code": "ET",
                            "name": "Ethiopia",
                            "id": "ZNlpMAULihV"
                        },
                        {
                            "code": "FK",
                            "name": "Falkland Islands (Malvinas)",
                            "id": "bef2vVeR23P"
                        },
                        {
                            "code": "FO",
                            "name": "Faroe Islands",
                            "id": "t3xIkfi2H9B"
                        },
                        {
                            "code": "FJ",
                            "name": "Fiji",
                            "id": "zFR8DxViVCF"
                        },
                        {
                            "code": "FI",
                            "name": "Finland",
                            "id": "CVzjZYuAWYN"
                        },
                        {
                            "code": "FR",
                            "name": "France",
                            "id": "yUGs4f8ERRO"
                        },
                        {
                            "code": "GF",
                            "name": "French Guiana",
                            "id": "buoSIj3Vwra"
                        },
                        {
                            "code": "PF",
                            "name": "French Polynesia",
                            "id": "tp6tO0mcWi3"
                        },
                        {
                            "code": "TF",
                            "name": "French Southern Territories",
                            "id": "kCQuehGwFao"
                        },
                        {
                            "code": "GA",
                            "name": "Gabon",
                            "id": "ITLH48ZUffA"
                        },
                        {
                            "code": "GM",
                            "name": "Gambia",
                            "id": "ACPpkQT2y2F"
                        },
                        {
                            "code": "GE",
                            "name": "Georgia",
                            "id": "QZe0b0vBdRx"
                        },
                        {
                            "code": "DE",
                            "name": "Germany",
                            "id": "F7VjKLOSKYQ"
                        },
                        {
                            "code": "GH",
                            "name": "Ghana",
                            "id": "O80pXVxnTv0"
                        },
                        {
                            "code": "GI",
                            "name": "Gibraltar",
                            "id": "XgXpDOKZfIX"
                        },
                        {
                            "code": "GR",
                            "name": "Greece",
                            "id": "ic83mV0Np1K"
                        },
                        {
                            "code": "GL",
                            "name": "Greenland",
                            "id": "PxDnUHCZFYV"
                        },
                        {
                            "code": "GD",
                            "name": "Grenada",
                            "id": "F0bPny0RATH"
                        },
                        {
                            "code": "GP",
                            "name": "Guadeloupe",
                            "id": "zYa1MKY2G3d"
                        },
                        {
                            "code": "GU",
                            "name": "Guam",
                            "id": "lbhBF8S5JoR"
                        },
                        {
                            "code": "GT",
                            "name": "Guatemala",
                            "id": "okjtUpqkBY0"
                        },
                        {
                            "code": "GG",
                            "name": "Guernsey",
                            "id": "QlGDgVLB9Mg"
                        },
                        {
                            "code": "GN",
                            "name": "Guinea",
                            "id": "yqF1sleXWu4"
                        },
                        {
                            "code": "GW",
                            "name": "Guinea-Bissau",
                            "id": "b226WlAQhQT"
                        },
                        {
                            "code": "GY",
                            "name": "Guyana",
                            "id": "l2pI0kEQo1x"
                        },
                        {
                            "code": "HT",
                            "name": "Haiti",
                            "id": "hgQ5KIZRzrq"
                        },
                        {
                            "code": "HM",
                            "name": "Heard Island and McDonald Islands",
                            "id": "UqDKVzW7N6x"
                        },
                        {
                            "code": "VA",
                            "name": "Holy See",
                            "id": "UPgq5yBhzma"
                        },
                        {
                            "code": "HN",
                            "name": "Honduras",
                            "id": "guqDJE0tEhz"
                        },
                        {
                            "code": "HK",
                            "name": "Hong Kong",
                            "id": "ehSp3aJDOhB"
                        },
                        {
                            "code": "HU",
                            "name": "Hungary",
                            "id": "M0vvlGGO2ET"
                        },
                        {
                            "code": "IS",
                            "name": "Iceland",
                            "id": "oCqAUWB1AK0"
                        },
                        {
                            "code": "IN",
                            "name": "India",
                            "id": "snaU0ZUJ03A"
                        },
                        {
                            "code": "ID",
                            "name": "Indonesia",
                            "id": "Ls7DhgvN3M9"
                        },
                        {
                            "code": "IR",
                            "name": "Iran (Islamic Republic of)",
                            "id": "bvxdOvWV0Qt"
                        },
                        {
                            "code": "IQ",
                            "name": "Iraq",
                            "id": "kpEvOGtOaJa"
                        },
                        {
                            "code": "IE",
                            "name": "Ireland",
                            "id": "PahOgLwCZMg"
                        },
                        {
                            "code": "IM",
                            "name": "Isle of Man",
                            "id": "GgpJFlPRlXZ"
                        },
                        {
                            "code": "IL",
                            "name": "Israel",
                            "id": "GeUERumufaz"
                        },
                        {
                            "code": "IT",
                            "name": "Italy",
                            "id": "sHSgXweCFwT"
                        },
                        {
                            "code": "JM",
                            "name": "Jamaica",
                            "id": "c2gkADoIq0a"
                        },
                        {
                            "code": "JP",
                            "name": "Japan",
                            "id": "Iyxt9soGc5i"
                        },
                        {
                            "code": "JE",
                            "name": "Jersey",
                            "id": "wW0cTJr4QvY"
                        },
                        {
                            "code": "JO",
                            "name": "Jordan",
                            "id": "Dz0ikE8Opef"
                        },
                        {
                            "code": "KZ",
                            "name": "Kazakhstan",
                            "id": "CxA2f0AZM2H"
                        },
                        {
                            "code": "KE",
                            "name": "Kenya",
                            "id": "cCIXvPLzsUj"
                        },
                        {
                            "code": "KI",
                            "name": "Kiribati",
                            "id": "ysv73lzyfPU"
                        },
                        {
                            "code": "KP",
                            "name": "Korea (Democratic People's Republic of)",
                            "id": "W26NWlPaIJD"
                        },
                        {
                            "code": "KR",
                            "name": "Korea (Republic of)",
                            "id": "wrMAg1FeNEH"
                        },
                        {
                            "code": "KW",
                            "name": "Kuwait",
                            "id": "Rk3W9BRd1D6"
                        },
                        {
                            "code": "KG",
                            "name": "Kyrgyzstan",
                            "id": "FLWvmb7Fngv"
                        },
                        {
                            "code": "LA",
                            "name": "Lao People's Democratic Republic",
                            "id": "hmmPhRwpYlN"
                        },
                        {
                            "code": "LV",
                            "name": "Latvia",
                            "id": "PNloUnfVthd"
                        },
                        {
                            "code": "LB",
                            "name": "Lebanon",
                            "id": "khbm7vs5OVf"
                        },
                        {
                            "code": "LS",
                            "name": "Lesotho",
                            "id": "JBUNAoY2UCR"
                        },
                        {
                            "code": "LR",
                            "name": "Liberia",
                            "id": "jX4Q0C4e5Wz"
                        },
                        {
                            "code": "LY",
                            "name": "Libya",
                            "id": "aWdKmnUbyq8"
                        },
                        {
                            "code": "LI",
                            "name": "Liechtenstein",
                            "id": "YFBUwHreFty"
                        },
                        {
                            "code": "LT",
                            "name": "Lithuania",
                            "id": "NgE7dxvafzN"
                        },
                        {
                            "code": "LU",
                            "name": "Luxembourg",
                            "id": "Lcpj9JRPN6A"
                        },
                        {
                            "code": "MO",
                            "name": "Macao",
                            "id": "Ud37kwuqYOX"
                        },
                        {
                            "code": "MK",
                            "name": "Macedonia (the former Yugoslav Republic of)",
                            "id": "ol616QD7y9v"
                        },
                        {
                            "code": "MG",
                            "name": "Madagascar",
                            "id": "V9dlKIBeEt5"
                        },
                        {
                            "code": "MW",
                            "name": "Malawi",
                            "id": "ZJKBOoWeZK8"
                        },
                        {
                            "code": "MY",
                            "name": "Malaysia",
                            "id": "TbqJLwX75MB"
                        },
                        {
                            "code": "MV",
                            "name": "Maldives",
                            "id": "cz1jjVYazCU"
                        },
                        {
                            "code": "ML",
                            "name": "Mali",
                            "id": "vaAP0kIZoWc"
                        },
                        {
                            "code": "MT",
                            "name": "Malta",
                            "id": "oUZwMtRc9UZ"
                        },
                        {
                            "code": "MH",
                            "name": "Marshall Islands",
                            "id": "FTShlPn5hKZ"
                        },
                        {
                            "code": "MQ",
                            "name": "Martinique",
                            "id": "PXW5S4tsyeU"
                        },
                        {
                            "code": "MR",
                            "name": "Mauritania",
                            "id": "zSqkhuvMIJx"
                        },
                        {
                            "code": "MU",
                            "name": "Mauritius",
                            "id": "phk8e9YUIyk"
                        },
                        {
                            "code": "YT",
                            "name": "Mayotte",
                            "id": "Lr41AxFkOoQ"
                        },
                        {
                            "code": "MX",
                            "name": "Mexico",
                            "id": "AZKUCGpgtzT"
                        },
                        {
                            "code": "FM",
                            "name": "Micronesia (Federated States of)",
                            "id": "gr2CYy3Dr56"
                        },
                        {
                            "code": "MD",
                            "name": "Moldova (Republic of)",
                            "id": "n8HXfqEC7qW"
                        },
                        {
                            "code": "MC",
                            "name": "Monaco",
                            "id": "zJVqezCOVEw"
                        },
                        {
                            "code": "MN",
                            "name": "Mongolia",
                            "id": "goMYgrWwzxj"
                        },
                        {
                            "code": "ME",
                            "name": "Montenegro",
                            "id": "YMAWw8lGmVz"
                        },
                        {
                            "code": "MS",
                            "name": "Montserrat",
                            "id": "BFKxH53DgZ4"
                        },
                        {
                            "code": "MA",
                            "name": "Morocco",
                            "id": "jpFFUofjPzL"
                        },
                        {
                            "code": "MZ",
                            "name": "Mozambique",
                            "id": "Qodq6bOTBgk"
                        },
                        {
                            "code": "MM",
                            "name": "Myanmar",
                            "id": "HHpmrOG4Oah"
                        },
                        {
                            "code": "NA",
                            "name": "Namibia",
                            "id": "o3FDUKEuK9I"
                        },
                        {
                            "code": "NR",
                            "name": "Nauru",
                            "id": "CqUzE4oAeMo"
                        },
                        {
                            "code": "NP",
                            "name": "Nepal",
                            "id": "G3wJAW7bEqO"
                        },
                        {
                            "code": "NL",
                            "name": "Netherlands",
                            "id": "XhVZiHLpMnJ"
                        },
                        {
                            "code": "NC",
                            "name": "New Caledonia",
                            "id": "SFnJXKHtNPT"
                        },
                        {
                            "code": "NZ",
                            "name": "New Zealand",
                            "id": "NbSAL47OfTk"
                        },
                        {
                            "code": "NI",
                            "name": "Nicaragua",
                            "id": "G9i0iHpkYbp"
                        },
                        {
                            "code": "NE",
                            "name": "Niger",
                            "id": "isQUPKHcs6X"
                        },
                        {
                            "code": "NG",
                            "name": "Nigeria",
                            "id": "i6mNzSoi00T"
                        },
                        {
                            "code": "NU",
                            "name": "Niue",
                            "id": "fsojvbtJaQ9"
                        },
                        {
                            "code": "NF",
                            "name": "Norfolk Island",
                            "id": "CHVoLfGmFbt"
                        },
                        {
                            "code": "MP",
                            "name": "Northern Mariana Islands",
                            "id": "DnKpeOCqfDu"
                        },
                        {
                            "code": "NO",
                            "name": "Norway",
                            "id": "abXMcNMfUHW"
                        },
                        {
                            "code": "OM",
                            "name": "Oman",
                            "id": "KCS77S1n8yE"
                        },
                        {
                            "code": "PK",
                            "name": "Pakistan",
                            "id": "Vd3efHrokOx"
                        },
                        {
                            "code": "PW",
                            "name": "Palau",
                            "id": "nuJCiz6sWMs"
                        },
                        {
                            "code": "PS",
                            "name": "Palestine, State of",
                            "id": "PSXaRzhAoO5"
                        },
                        {
                            "code": "PA",
                            "name": "Panama",
                            "id": "Z4UIfFiFuMC"
                        },
                        {
                            "code": "PG",
                            "name": "Papua New Guinea",
                            "id": "y5Edd8OyiIS"
                        },
                        {
                            "code": "PY",
                            "name": "Paraguay",
                            "id": "JtLlBt8z3Th"
                        },
                        {
                            "code": "PE",
                            "name": "Peru",
                            "id": "u0Iy4qXUpGx"
                        },
                        {
                            "code": "PH",
                            "name": "Philippines",
                            "id": "Hn8n03RTQoy"
                        },
                        {
                            "code": "PN",
                            "name": "Pitcairn",
                            "id": "UH9iMU8RCbR"
                        },
                        {
                            "code": "PL",
                            "name": "Poland",
                            "id": "TgDFVQK8poQ"
                        },
                        {
                            "code": "PT",
                            "name": "Portugal",
                            "id": "fJGUZnvCg0m"
                        },
                        {
                            "code": "PR",
                            "name": "Puerto Rico",
                            "id": "pMggNgUQ24t"
                        },
                        {
                            "code": "QA",
                            "name": "Qatar",
                            "id": "YBnIVZiENSl"
                        },
                        {
                            "code": "RE",
                            "name": "Reunion",
                            "id": "dyHaYgO8uRD"
                        },
                        {
                            "code": "RO",
                            "name": "Romania",
                            "id": "fDggEkf3s9Q"
                        },
                        {
                            "code": "RU",
                            "name": "Russian Federation",
                            "id": "Vh7og15xjfI"
                        },
                        {
                            "code": "RW",
                            "name": "Rwanda",
                            "id": "XFtEiGSEM5K"
                        },
                        {
                            "code": "BL",
                            "name": "Saint Barthalemy",
                            "id": "TlWg479ykNG"
                        },
                        {
                            "code": "SH",
                            "name": "Saint Helena, Ascension and Tristan da Cunha",
                            "id": "AbZ1Ahy2uzF"
                        },
                        {
                            "code": "KN",
                            "name": "Saint Kitts and Nevis",
                            "id": "Vx5yJqEFdiG"
                        },
                        {
                            "code": "LC",
                            "name": "Saint Lucia",
                            "id": "oJtdF4dJlKR"
                        },
                        {
                            "code": "MF",
                            "name": "Saint Martin (French part)",
                            "id": "Fjs0ekdnQp4"
                        },
                        {
                            "code": "PM",
                            "name": "Saint Pierre and Miquelon",
                            "id": "cuBbK1kGxQG"
                        },
                        {
                            "code": "VC",
                            "name": "Saint Vincent and the Grenadines",
                            "id": "CgCPhepq1T0"
                        },
                        {
                            "code": "WS",
                            "name": "Samoa",
                            "id": "OiiQDTwRhiJ"
                        },
                        {
                            "code": "SM",
                            "name": "San Marino",
                            "id": "kgx4yTXnCm5"
                        },
                        {
                            "code": "ST",
                            "name": "Sao Tome and Principe",
                            "id": "ot9j1RhdTxJ"
                        },
                        {
                            "code": "SA",
                            "name": "Saudi Arabia",
                            "id": "K2Z3GIjbpfy"
                        },
                        {
                            "code": "SN",
                            "name": "Senegal",
                            "id": "IjeQQN6i6oB"
                        },
                        {
                            "code": "RS",
                            "name": "Serbia",
                            "id": "mwQoRreFhS4"
                        },
                        {
                            "code": "SC",
                            "name": "Seychelles",
                            "id": "nslF0rp6DYP"
                        },
                        {
                            "code": "SL",
                            "name": "Sierra Leone",
                            "id": "m5Mzp8gH9SE"
                        },
                        {
                            "code": "SG",
                            "name": "Singapore",
                            "id": "pGtXTzwNgYJ"
                        },
                        {
                            "code": "SX",
                            "name": "Sint Maarten (Dutch part)",
                            "id": "wU06ZppIUrr"
                        },
                        {
                            "code": "SK",
                            "name": "Slovakia",
                            "id": "SVkuqbtbwkn"
                        },
                        {
                            "code": "SI",
                            "name": "Slovenia",
                            "id": "tgZNiP0av9R"
                        },
                        {
                            "code": "SB",
                            "name": "Solomon Islands",
                            "id": "C6mh8woRILR"
                        },
                        {
                            "code": "SO",
                            "name": "Somalia",
                            "id": "XUAgsUvnd9D"
                        },
                        {
                            "code": "ZA",
                            "name": "South Africa",
                            "id": "ybi90nX7jIG"
                        },
                        {
                            "code": "GS",
                            "name": "South Georgia and the South Sandwich Islands",
                            "id": "xscRY8jGm4I"
                        },
                        {
                            "code": "SS",
                            "name": "South Sudan",
                            "id": "nucHGYLnDym"
                        },
                        {
                            "code": "ES",
                            "name": "Spain",
                            "id": "AWCr3B2Ec6K"
                        },
                        {
                            "code": "LK",
                            "name": "Sri Lanka",
                            "id": "vVm2PrIRCZb"
                        },
                        {
                            "code": "SD",
                            "name": "Sudan",
                            "id": "tmChdi1uORn"
                        },
                        {
                            "code": "SR",
                            "name": "Suriname",
                            "id": "dsiiSBdkIOV"
                        },
                        {
                            "code": "SJ",
                            "name": "Svalbard and Jan Mayen",
                            "id": "HvsdUX9XzqA"
                        },
                        {
                            "code": "SZ",
                            "name": "Swaziland",
                            "id": "LSa01WRIEoa"
                        },
                        {
                            "code": "SE",
                            "name": "Sweden",
                            "id": "BkyPw8ckTNY"
                        },
                        {
                            "code": "CH",
                            "name": "Switzerland",
                            "id": "TtTR0Yl2wu4"
                        },
                        {
                            "code": "SY",
                            "name": "Syrian Arab Republic",
                            "id": "rWZk1zIRhxd"
                        },
                        {
                            "code": "TW",
                            "name": "Taiwan, Province of China",
                            "id": "YiWILyGjKnW"
                        },
                        {
                            "code": "TJ",
                            "name": "Tajikistan",
                            "id": "z3ciloHD9PX"
                        },
                        {
                            "code": "TZ",
                            "name": "Tanzania, United Republic of",
                            "id": "EfbDHbL0WVR"
                        },
                        {
                            "code": "TH",
                            "name": "Thailand",
                            "id": "NgOETSb20pt"
                        },
                        {
                            "code": "TL",
                            "name": "Timor-Leste",
                            "id": "GHlYciOJcc3"
                        },
                        {
                            "code": "TG",
                            "name": "Togo",
                            "id": "lxBYLgAGHyI"
                        },
                        {
                            "code": "TK",
                            "name": "Tokelau",
                            "id": "ysx0MV7RW2X"
                        },
                        {
                            "code": "TO",
                            "name": "Tonga",
                            "id": "E8gQhClNFbP"
                        },
                        {
                            "code": "TT",
                            "name": "Trinidad and Tobago",
                            "id": "vpOUqs1VdKL"
                        },
                        {
                            "code": "TN",
                            "name": "Tunisia",
                            "id": "f5ZqqjsV2PJ"
                        },
                        {
                            "code": "TR",
                            "name": "Turkey",
                            "id": "cpSzNk48yTR"
                        },
                        {
                            "code": "TM",
                            "name": "Turkmenistan",
                            "id": "ziovQhoHqXQ"
                        },
                        {
                            "code": "TC",
                            "name": "Turks and Caicos Islands",
                            "id": "PxkPTw9fbIk"
                        },
                        {
                            "code": "TV",
                            "name": "Tuvalu",
                            "id": "RuqZKue3rFr"
                        },
                        {
                            "code": "UG",
                            "name": "Uganda",
                            "id": "clThxUwFWOz"
                        },
                        {
                            "code": "UA",
                            "name": "Ukraine",
                            "id": "N1cS8AIDi1q"
                        },
                        {
                            "code": "AE",
                            "name": "United Arab Emirates",
                            "id": "PDxzpx08WBj"
                        },
                        {
                            "code": "GB",
                            "name": "United Kingdom of Great Britain and Northern Ireland",
                            "id": "QBbuw7ibNxz"
                        },
                        {
                            "code": "US",
                            "name": "United States of America",
                            "id": "rFyxYwKsUHn"
                        },
                        {
                            "code": "UM",
                            "name": "United States Minor Outlying Islands",
                            "id": "slJul3ojjA4"
                        },
                        {
                            "code": "UY",
                            "name": "Uruguay",
                            "id": "J6NKBEYkEIX"
                        },
                        {
                            "code": "UZ",
                            "name": "Uzbekistan",
                            "id": "MZtPirsiobx"
                        },
                        {
                            "code": "VU",
                            "name": "Vanuatu",
                            "id": "zz44ZJwE4BC"
                        },
                        {
                            "code": "VE",
                            "name": "Venezuela (Bolivarian Republic of)",
                            "id": "aO1V8Km6tIa"
                        },
                        {
                            "code": "VN",
                            "name": "Viet Nam",
                            "id": "alllxGOxa3E"
                        },
                        {
                            "code": "VG",
                            "name": "Virgin Islands (British)",
                            "id": "yKhE8gOOm3t"
                        },
                        {
                            "code": "VI",
                            "name": "Virgin Islands (U.S.)",
                            "id": "MmfxULjuTXH"
                        },
                        {
                            "code": "WF",
                            "name": "Wallis and Futuna",
                            "id": "ctQxqa1n0Ki"
                        },
                        {
                            "code": "EH",
                            "name": "Western Sahara",
                            "id": "NdVZXFSvX7t"
                        },
                        {
                            "code": "YE",
                            "name": "Yemen",
                            "id": "oJ7nxbnJtlz"
                        },
                        {
                            "code": "ZM",
                            "name": "Zambia",
                            "id": "SJm6VUYbovd"
                        },
                        {
                            "code": "ZW",
                            "name": "Zimbabwe",
                            "id": "YULlOdKf9DK"
                        }
                    ]
                }
            }
        },
        {
            "trackedEntityAttribute": {
                "name": "National ID",
                "id": "Ewi7FUfcHAD",
                "valueType": "TEXT"
            }
        },
        {
            "trackedEntityAttribute": {
                "name": "Health Facility Code",
                "id": "sWn0CERcUYj",
                "valueType": "TEXT"
            }
        },
        {
            "trackedEntityAttribute": {
                "name": "HIV Program ID",
                "id": "iZWtxl8sCi6",
                "valueType": "TEXT"
            }
        },
        {
            "trackedEntityAttribute": {
                "name": "NHIS ID",
                "id": "u101Hz0Lemb",
                "valueType": "TEXT"
            }
        },
        {
            "trackedEntityAttribute": {
                "name": "HIV Communication consent",
                "id": "YsxExAltfIE",
                "valueType": "BOOLEAN"
            }
        }
    ],
    "organisationUnits": [
        {
            "name": "Tima-Cade Health Center",
            "id": "qSexzLrSdVs"
        },
        {
            "name": "Tukaraq Health Center",
            "id": "SafacSbYOOU"
        },
        {
            "name": "Wanla-Weyn TB Health Center",
            "id": "TwgyKshOft6"
        },
        {
            "name": "Xumbays Health Center",
            "id": "ttOSEZdQye9"
        },
        {
            "name": "Durduri Primary Health Unit",
            "id": "G5K3Kn4JuHK"
        },
        {
            "name": "Horseed MoH / SCI Health Center",
            "id": "oMr9znNp450"
        },
        {
            "name": "Mushani Health Center",
            "id": "qDkAkDrk8A3"
        },
        {
            "name": "Jungal Health Center",
            "id": "AlQapuPthO3"
        },
        {
            "name": "Fida Muse Health Center",
            "id": "d74vYkauIAN"
        },
        {
            "name": "Madawe Health Center",
            "id": "HXVgZcbOLvc"
        },
        {
            "name": "SRCS Mobile Health Clinic",
            "id": "KsMtnlN4H9B"
        },
        {
            "name": "Garbaharey Health Center",
            "id": "agmqwOKPaNp"
        },
        {
            "name": "Faafahdhuun Health Center",
            "id": "vw1Jh0LO9V2"
        },
        {
            "name": "Halimo Nor Health Center",
            "id": "fIVyw7iKj49"
        },
        {
            "name": "Dabagalo Health Center",
            "id": "nSYNxttnH7j"
        },
        {
            "name": "Luuq TB Health Center",
            "id": "xMoaKybUzoA"
        },
        {
            "name": "Salaama Health Center",
            "id": "ZyIgnNbaPgh"
        },
        {
            "name": "Al-Shifa Health Center",
            "id": "PgViMfhjzoe"
        },
        {
            "name": "Marsamage Primary Health Unit",
            "id": "GR1shqEUOzx"
        },
        {
            "name": "Sheekh Asharow Health Center",
            "id": "aI7BcwGfV7Y"
        },
        {
            "name": " Godob Health Center",
            "id": "uWgUKptNoix"
        },
        {
            "name": "Gadoon Health Center",
            "id": "v54qC3weGGB"
        },
        {
            "name": "Baarey Health Center",
            "id": "YReHTSnwmvO"
        },
        {
            "name": "Barwaaqo MoH / IOM Health Center",
            "id": "Mx2lyErHFZl"
        },
        {
            "name": "Central Health Center",
            "id": "HFO2Rwuzxhj"
        },
        {
            "name": "Galkacyo TB Center",
            "id": "HwAGeA5prpW"
        },
        {
            "name": "Howlaha Maraakiibta Health Center",
            "id": "ilcBDbhgl5v"
        },
        {
            "name": "Boondheere Health Center",
            "id": "ECSDF06cZ7M"
        },
        {
            "name": "Burtinle TB Health Center",
            "id": "GrOkcjsXkuY"
        },
        {
            "name": "Bardera District Hospital",
            "id": "LWatfWdSbKW"
        },
        {
            "name": "UNA Health Center",
            "id": "AcufDI94j2Q"
        },
        {
            "name": "Damerale Health Center",
            "id": "mkOoYCkiCwH"
        },
        {
            "name": "Fayo Care Hospital",
            "id": "u2gYK5QiLhe"
        },
        {
            "name": "Wasil SCRS Health Center",
            "id": "pJOcmwWRelM"
        },
        {
            "name": "Gowdo Health Center",
            "id": "q7K999jCnDN"
        },
        {
            "name": "Galbeed Primary Health Unit ",
            "id": "mKbrCkrYKys"
        },
        {
            "name": "Galdogob Mobile Health Unit",
            "id": "HQeC1UOgc9E"
        },
        {
            "name": "Galinsoor Health Center",
            "id": "bIF9pdpoej9"
        },
        {
            "name": "Xamur Primary Health Unit",
            "id": "aq42RWNScgh"
        },
        {
            "name": "Qaycad Primary Health Unit",
            "id": "JZsv7WKNsu7"
        },
        {
            "name": "Barwaaqo Health Center",
            "id": "EKWn3W459kg"
        },
        {
            "name": "Unuun Primary Health Unit",
            "id": "UA03LbDDVSh"
        },
        {
            "name": "Labad Primary Health Unit",
            "id": "ysI4iFHVyRE"
        },
        {
            "name": "Mahaday Intersos Health Center",
            "id": "rPn1xQMKIHr"
        },
        {
            "name": "Istanbuul Outreach / Mobile Health Clinic",
            "id": "I9XYy3nqgGM"
        },
        {
            "name": "Jariban TB Health Center",
            "id": "ZkVZVSopcdq"
        },
        {
            "name": "Harfo Health Center",
            "id": "ZyC8lbpYptM"
        },
        {
            "name": "Shibis TB/HIV Health Center",
            "id": "TWtjUVL3rpe"
        },
        {
            "name": "Ceel-Jalle Health Center",
            "id": "lnCHJ27LL5o"
        },
        {
            "name": "Ufain District Hospital",
            "id": "tt9RcI5GzEi"
        },
        {
            "name": "Shaxda  Health Center",
            "id": "NkcZnqhRfL0"
        },
        {
            "name": "Uurjire Primary Health Unit",
            "id": "oEBO97MIWxE"
        },
        {
            "name": "Burtinle Mobile Health 1",
            "id": "Ip1AP3xZmdu"
        },
        {
            "name": "Cows Quran Health Center",
            "id": "uJXFYsdOiRp"
        },
        {
            "name": "Gofgaudud ALDA Health Center",
            "id": "wZbJbI69rPS"
        },
        {
            "name": "Galbarwaaqo  Health Center",
            "id": "hvXrBKAL6Mb"
        },
        {
            "name": "Kalcad Primary Health Unit",
            "id": "atk4UHNoMXG"
        },
        {
            "name": "Awdhegle Health Center",
            "id": "hN2P0ta50uX"
        },
        {
            "name": "Ceelasha Health Center 1",
            "id": "mPRSCx6qqQf"
        },
        {
            "name": "Heema Primary Health Unit",
            "id": "ijHGYQCEr0H"
        },
        {
            "name": "Xasbahale Health Center",
            "id": "fXjPFRH7uG9"
        },
        {
            "name": "Unuun Health Center",
            "id": "Dt9lptO5Gms"
        },
        {
            "name": "Wadi Kheeyr Primary Health Unit",
            "id": "LCh67H7W4rC"
        },
        {
            "name": "Abdal-Birole Health Center",
            "id": "zScuTziYc7p"
        },
        {
            "name": "Garowe Mobile Health Unit",
            "id": "Sjr1MmE4yh4"
        },
        {
            "name": "Obosibo Health Center",
            "id": "A82H7GVbSpD"
        },
        {
            "name": "El Ali TB Health Center",
            "id": "kXYkNR6aicS"
        },
        {
            "name": "Gargar Health Center",
            "id": "OnpZflQbMSv"
        },
        {
            "name": "Iskushuban TB Health Center",
            "id": "lS9PIF32OLo"
        },
        {
            "name": "Xamar Specialized Hospital",
            "id": "ajIjc15pV5u"
        },
        {
            "name": "Gurmad Health Center",
            "id": "FX3oVBflc1S"
        },
        {
            "name": "Dan Primary Health Unit",
            "id": "I73RVQQ10Ys"
        },
        {
            "name": "Dalxiska Primary Health Unit",
            "id": "uL4oEiC7Q3a"
        },
        {
            "name": "October Health Center",
            "id": "UgYJk3AM5vd"
        },
        {
            "name": "Qaamqaam Health Center",
            "id": "IGrcdLal1X4"
        },
        {
            "name": "Beliwacatay Primary Health Unit",
            "id": "hydiOy5ftHm"
        },
        {
            "name": "Bali Cad Helath Center",
            "id": "NiwMGoRmG3w"
        },
        {
            "name": "Diilin Primary Health Unit",
            "id": "XOYk3ZDh5rT"
        },
        {
            "name": "Qansaxle Primary Health Unit",
            "id": "A3TfagVBJ6N"
        },
        {
            "name": "Dangoroyo District Hospital",
            "id": "yByo3jZXfm0"
        },
        {
            "name": "Hanta Dher Health Center",
            "id": "f8am9shH2IG"
        },
        {
            "name": "Siliga Towfiq Primary Health Unit",
            "id": "BnV8jqscKRs"
        },
        {
            "name": "Xijiijle Health Center",
            "id": "D2zZRS84HvV"
        },
        {
            "name": "Biyo Cade PHU",
            "id": "SgsPSwaCT5k"
        },
        {
            "name": "Kulbiyow Health Center",
            "id": "ynRk2qsHaUD"
        },
        {
            "name": "Waajid Health Center",
            "id": "rbaQ0PVUwEK"
        },
        {
            "name": "Hoodaa Primary Health unit  Plus",
            "id": "l7THCsvP3dR"
        },
        {
            "name": "Burhakaba MT1 (SOS)",
            "id": "OyX6bihLQwb"
        },
        {
            "name": "Maandheere Mobile Health Clinic",
            "id": "IR7QvtizQ5C"
        },
        {
            "name": "Awdinle READO Health Center",
            "id": "Zd6t5rLQUvG"
        },
        {
            "name": "Dalwayn Primary Health Unit",
            "id": "jsIDYLclaVm"
        },
        {
            "name": "11 Janayo Primary Health Unit",
            "id": "yBfKYQ8bAHL"
        },
        {
            "name": "Hamar JabJab  Health Center",
            "id": "Yexmj8W1jeG"
        },
        {
            "name": "Hawaal Adeey Health Center",
            "id": "lGcZQ6YUONQ"
        },
        {
            "name": "Indho ceel Health center",
            "id": "gNydx1BtW2G"
        },
        {
            "name": "Cuun Primary Health Unit",
            "id": "WkPmU9UNJz5"
        },
        {
            "name": "Bodaan / Garsaley Health Center",
            "id": "twXsGhQlZGu"
        },
        {
            "name": "Bacadweyn District Hospital",
            "id": "Z9qYYTwHLEV"
        },
        {
            "name": "Shatilow Primary Health Unit",
            "id": "lRKZzZn74JA"
        },
        {
            "name": "Dhiganle Health Center",
            "id": "OJ2G65IDnmi"
        },
        {
            "name": "Liqliqato Health Center",
            "id": "JcLnW82LQJn"
        },
        {
            "name": "Karin-Garfood Health Center",
            "id": "NZ0d6P9Ijkg"
        },
        {
            "name": "Wadajir Health Center",
            "id": "m6HVErFEZ8D"
        },
        {
            "name": "Maygaale Primary Health Unit",
            "id": "hsh1MC2hYbV"
        },
        {
            "name": "Horseed Health Center",
            "id": "ZVCd1hdOpPA"
        },
        {
            "name": "Ceelaayo Primary Health Unit",
            "id": "Nlk8G99jql6"
        },
        {
            "name": "Waberi Health Center",
            "id": "C9NLbmYPfgV"
        },
        {
            "name": "Wanla Weyn Community Hospital",
            "id": "vKMmZpEUPvW"
        },
        {
            "name": "Guriel TB Health Center",
            "id": "lwgqZ2pqjEB"
        },
        {
            "name": "Lulubshe Primary Health Unit",
            "id": "cHA6lPz18HB"
        },
        {
            "name": "Dergoos Health Center",
            "id": "EpPEkTHQwZF"
        },
        {
            "name": "Bosasso Reception Health Center",
            "id": "SJfSDUM2o9D"
        },
        {
            "name": "MoH / WVS Mobile Health Clinic 2",
            "id": "Kz9vB2n3KRW"
        },
        {
            "name": "Baalguri Health Center",
            "id": "wEaISyblfGb"
        },
        {
            "name": "Daryo-Gesaweyn Primary Health Unit",
            "id": "BohF48OlyXC"
        },
        {
            "name": "Qeila-Weine Health Center",
            "id": "HHeKyNJFEBH"
        },
        {
            "name": "Boondheere YK Health Center",
            "id": "vZStIJrp2ZX"
        },
        {
            "name": "Kalabayr Primary Health Unit",
            "id": "oFcFfgHU4Q9"
        },
        {
            "name": "Jowhar Health Center",
            "id": "OTSp4jHky6m"
        },
        {
            "name": "Mudug Regional Hospital",
            "id": "pJ0EnQxEYS7"
        },
        {
            "name": "Washaaqo Health Center",
            "id": "ikcNnAqKD91"
        },
        {
            "name": "Foar Primary Health Unit",
            "id": "cmo4xO7M7Us"
        },
        {
            "name": "Kalabayr Primary Health Unit",
            "id": "LC70BebxSAk"
        },
        {
            "name": "Awr-Bogays Health Center",
            "id": "W291iprkuEd"
        },
        {
            "name": "ADC Primary Health Unit",
            "id": "lQMHaGgNqYu"
        },
        {
            "name": "Belet Weyne TB Health Center 2",
            "id": "vH8xuP5eOER"
        },
        {
            "name": "Tabelaha Health Center",
            "id": "oYBJDrRlKuR"
        },
        {
            "name": "Armo Health Center",
            "id": "O7nv71q1UEW"
        },
        {
            "name": "Alla Suge Primary Health Unit",
            "id": "Cpr2UxPtPGM"
        },
        {
            "name": "Dajalaq Health Center",
            "id": "d2MTCKO1FWl"
        },
        {
            "name": "Quracjome Health Center",
            "id": "UE0mxMHSWxC"
        },
        {
            "name": "Ga'an Libah  Health Center",
            "id": "TiGaFIVE86f"
        },
        {
            "name": "MoH / WVS Mobile Health Clinic 1",
            "id": "Jz8Yr8kJ7Oo"
        },
        {
            "name": "Yamays Health Center",
            "id": "BOEqaWoZhye"
        },
        {
            "name": "Mudug Regional Hospital",
            "id": "FtZ8UnHCyCV"
        },
        {
            "name": "Gulwade Health Center",
            "id": "byKeYPEBouB"
        },
        {
            "name": "Nasiib Health Center",
            "id": "e1tk2PGJn37"
        },
        {
            "name": "Farqeyr Health Center",
            "id": "lJTxWhn8H1p"
        },
        {
            "name": "Al Raxma Health Center",
            "id": "aTmzXtsm5ve"
        },
        {
            "name": "Holhol Primary Health Unit",
            "id": "HfsjlGuvWL2"
        },
        {
            "name": "Kormari Health Center",
            "id": "wLiuwCXb3rs"
        },
        {
            "name": "Jeexa Primary Health Unit",
            "id": "NC0MmITGmnI"
        },
        {
            "name": "Abudwak Health Center",
            "id": "U09Ecao2TtT"
        },
        {
            "name": "Berdale Primary Health Unit",
            "id": "GXgTN2gZshd"
        },
        {
            "name": "Janaale Health Center 1",
            "id": "YA8tdX88FA4"
        },
        {
            "name": "Raskanboni Health Center",
            "id": "viTmon0XjUc"
        },
        {
            "name": "Xanaano Health Center",
            "id": "T8UMdVVpJTe"
        },
        {
            "name": "Jiliyale Health Center",
            "id": "NU1v277xDFp"
        },
        {
            "name": "Haji Ali Health Center",
            "id": "Tqao4Tx1e1E"
        },
        {
            "name": "Doonyaale Health Center",
            "id": "CTv6re0s47k"
        },
        {
            "name": "South Galkacyo Health Center",
            "id": "k66OFeCZJUE"
        },
        {
            "name": "Hurdiya Health Center",
            "id": "GsaZxDHKNhj"
        },
        {
            "name": "SRCS Galkacyo mobile",
            "id": "IzD7NZUzqgK"
        },
        {
            "name": "Hawo Tako  Health Center",
            "id": "MEDhvvEPPO6"
        },
        {
            "name": "Qararo Health Center",
            "id": "foEZ5IerB3X"
        },
        {
            "name": "Garqoryaale Health Center",
            "id": "OHzXBxrFjKM"
        },
        {
            "name": "Garsoor Haelth center",
            "id": "Lp4q8mfi1iO"
        },
        {
            "name": "Huurshe Health Center",
            "id": "DuzDuV6kDAE"
        },
        {
            "name": "Bacadweyn Health Center",
            "id": "rPVaNRIt0Im"
        },
        {
            "name": "Beer Dhagaxtuur Primary Health Unit",
            "id": "vhJ5Ek9hG1a"
        },
        {
            "name": "Darjiinka  Health Center",
            "id": "JjlElaYV3H2"
        },
        {
            "name": "Teerage Primary Health Unit",
            "id": "culpB3ReD5q"
        },
        {
            "name": "Balli Dhidin District Hospital",
            "id": "z4w12101FyS"
        },
        {
            "name": "Handhaa Primary Health Unit",
            "id": "AE0y9zKf7c5"
        },
        {
            "name": "Godobjiiran Health Center",
            "id": "v4BIzhluT4u"
        },
        {
            "name": "Camaan Health Center",
            "id": "mdw2XT4t9pL"
        },
        {
            "name": "Busley Health Center",
            "id": "Y2yAFIXWoYQ"
        },
        {
            "name": "Galbeed Health Centre",
            "id": "eGozH2BmaQW"
        },
        {
            "name": "Shire Primary Health Unit",
            "id": "DwS6xAcqyDo"
        },
        {
            "name": "Shabel Health Center",
            "id": "EUOvPMrlhrU"
        },
        {
            "name": "Danwadag Private TB Health Center",
            "id": "yWqIAx2zAGy"
        },
        {
            "name": "Guriel Health Center",
            "id": "ySVcsZ8fYwR"
        },
        {
            "name": "Kalabaydh Health Center",
            "id": "zp2LI6ASYkf"
        },
        {
            "name": "Kooshin Health Center",
            "id": "Q2fE1Q7eHA5"
        },
        {
            "name": "Hareri Primary Health Unit",
            "id": "MiELSbDvpag"
        },
        {
            "name": "Xoogaad Primary Health Unit",
            "id": "dhSGzWbZBzV"
        },
        {
            "name": "Degay-Bare Health Center",
            "id": "uUNPQ3UWVsU"
        },
        {
            "name": "Qansaxleey Mobile/outreach Health Team ",
            "id": "x1Ef6juDG22"
        },
        {
            "name": "Geesaley Primary Health Unit",
            "id": "MQaXAxXBSVW"
        },
        {
            "name": "Midnimo Health Center",
            "id": "twvB0SB2lH8"
        },
        {
            "name": "Moragabey Health Center",
            "id": "YSelzquBmii"
        },
        {
            "name": "Hanano District Hospital",
            "id": "YVTwC5LsfrD"
        },
        {
            "name": "Kulmiye Health Center",
            "id": "DX42xJeDAlS"
        },
        {
            "name": "South Galkayo Bisha Cas Health Center",
            "id": "qquCzCf7Rum"
        },
        {
            "name": "Gol-Nugaal Referal HC",
            "id": "tbm5kPwjpGb"
        },
        {
            "name": "Daarusalaam Primary Health Centre",
            "id": "pqw5VsI9z2F"
        },
        {
            "name": "Madina Majabto Primary Health Unit",
            "id": "cIeKPzEBTUk"
        },
        {
            "name": "Taleex Health Center ",
            "id": "VgkVja3JZKz"
        },
        {
            "name": "Finsoma TB Health Center",
            "id": "XQwJtjJKi6v"
        },
        {
            "name": "Kahda KM13 Health Center",
            "id": "QYaQJwuso7H"
        },
        {
            "name": "Dhaxan Primary Health Unit",
            "id": "ijalR7nhLF8"
        },
        {
            "name": "Qansaxdhere SRCS Health Center",
            "id": "OJl48mL5t4i"
        },
        {
            "name": "Sheerbi Health Center",
            "id": "LU4LboNZv1p"
        },
        {
            "name": "Luuq District Hospital",
            "id": "gDpM9P5mYnB"
        },
        {
            "name": "Adakibir Primary Health Unit",
            "id": "e3AspPt1mUN"
        },
        {
            "name": "Adhicadeys Primary Health Unit",
            "id": "FMbmkLCVAfU"
        },
        {
            "name": "Gacal-Guule Primary Health Unit",
            "id": "KpAXp03byPV"
        },
        {
            "name": "Abdi Aziz Health Center",
            "id": "rnMuBR93sjR"
        },
        {
            "name": "Cambaar Sare Primary Health Unit",
            "id": "gfHZA1gKt3v"
        },
        {
            "name": "Jurile Primary Health Unit",
            "id": "pD1AXl8afYI"
        },
        {
            "name": "KM8 Health Center",
            "id": "FGD4atAuZ6j"
        },
        {
            "name": "Afgoye District Hospital",
            "id": "u2Efuz64V3B"
        },
        {
            "name": "Eeldheere Health Center",
            "id": "mxcQKWMondy"
        },
        {
            "name": "Degelama Primary Health Unit",
            "id": "R4nHku1cUOL"
        },
        {
            "name": "Fiyasko Health Center",
            "id": "WcrYCxsi5pv"
        },
        {
            "name": "Yaqshid Health Center",
            "id": "pLrAQTPcYBl"
        },
        {
            "name": "Dhusamarreb Regional Hospital",
            "id": "OphfnkLVJVU"
        },
        {
            "name": "Falaydh-yaale HC",
            "id": "KsLCUXG4FFq"
        },
        {
            "name": "Horseed Health Center",
            "id": "Hlm24RYsFdh"
        },
        {
            "name": "Kalabayr Primary Health Unit",
            "id": "lHrxpyHaWLn"
        },
        {
            "name": "Gambadhe Health Center",
            "id": "e2yYQ2rm35H"
        },
        {
            "name": "Ubah Health Center",
            "id": "rXpDnN50w3d"
        },
        {
            "name": "Wadajir Health Center",
            "id": "bxXfa9km3Rl"
        },
        {
            "name": "Shada Health Center",
            "id": "SJoRVAd4WjX"
        },
        {
            "name": "Bandar Wanag Health Center",
            "id": "KC9D3GvMY56"
        },
        {
            "name": "Wajeer Health Center 3",
            "id": "EpVTlRXe7DW"
        },
        {
            "name": "Kurta Health Center",
            "id": "b5EAiOsiTbs"
        },
        {
            "name": "Badbado Health Center",
            "id": "a7IShWiZAtv"
        },
        {
            "name": "Kurman Health Center",
            "id": "X0vDjS9UxJc"
        },
        {
            "name": "Godinlabe Health Center",
            "id": "h1JbDdr0vXH"
        },
        {
            "name": "Xamar Lagu Xir Health Center",
            "id": "jPD9s5S0YQR"
        },
        {
            "name": "Karan  Health Center",
            "id": "eZOMFcDOpcK"
        },
        {
            "name": "Gaheer Healh Center",
            "id": "ZvefgqmAOyZ"
        },
        {
            "name": "Higlada Primary Health Unit",
            "id": "WMCLItAYd8D"
        },
        {
            "name": "Atlatic Private Hospital",
            "id": "rkrgdfxmcGa"
        },
        {
            "name": "Laaso Curdin Health Center",
            "id": "Vqk9aJlsLep"
        },
        {
            "name": "Hawadley Intersos Health Center",
            "id": "ioTdaLgHPsK"
        },
        {
            "name": "Ceel-Waaq Outreach / Mobile Health Clinic",
            "id": "OEXnn1zCYyM"
        },
        {
            "name": "Gaarisa TB Health Center",
            "id": "bJalITKClat"
        },
        {
            "name": "Waberi Health Center",
            "id": "aXj24QOnnXt"
        },
        {
            "name": "Taleh Health Center",
            "id": "iqlX4fIL70f"
        },
        {
            "name": "Baargaal TB Health Center",
            "id": "JvvU1J2JoPA"
        },
        {
            "name": "IMC Mobile Health Clinic 2",
            "id": "GehxtFjdXNV"
        },
        {
            "name": "Baidoa Health Center",
            "id": "ZOmn39P8FBC"
        },
        {
            "name": "Bursaalax District Hospital",
            "id": "MYQjYgxN7NN"
        },
        {
            "name": "Baidoa HIDIG Health Center",
            "id": "cQq2KKPtOMG"
        },
        {
            "name": "Balanbale  Health Center",
            "id": "rR9ss69dyeW"
        },
        {
            "name": "Af Urur Primary Health Unit",
            "id": "SSK4lVpV1s1"
        },
        {
            "name": "Wiil-Waal Health Center",
            "id": "WzG2Y6uT31s"
        },
        {
            "name": "Yamays Health Center",
            "id": "BkdeM5Z9zT2"
        },
        {
            "name": "Kulaal Primary Health Unit",
            "id": "yFxWSLmXzB5"
        },
        {
            "name": "Somecare Private Hospital",
            "id": "jHHTmDIlDKe"
        },
        {
            "name": "Celbuw Health Center",
            "id": "tnJUwOlE08g"
        },
        {
            "name": "Gofgaduud Shabelo Health Center",
            "id": "nX2NFXpWd1h"
        },
        {
            "name": "Hoodley Health Center",
            "id": "vtOTSc7KrdJ"
        },
        {
            "name": "Xero Dhegaxleey Health Center",
            "id": "XE1U7zdJThK"
        },
        {
            "name": "Kahandho Primary Health Unit",
            "id": "lZN2BrozMhV"
        },
        {
            "name": "Baargaal District Hospital",
            "id": "fHv9wT7pXZv"
        },
        {
            "name": "Damala-Xagare Health Center",
            "id": "ocZd59hfDX4"
        },
        {
            "name": "Lifeline Beled Hawo Mobile Health Team",
            "id": "lsZvqIgbUtv"
        },
        {
            "name": "Daryeel Health Center",
            "id": "PAToGd9Ob8Q"
        },
        {
            "name": "RHC Health Center",
            "id": "N0S1zzn08ka"
        },
        {
            "name": "Afgoye Maternity Hospital",
            "id": "fOaWpa8LDwP"
        },
        {
            "name": "Marerey Healthy Center",
            "id": "y4VdzeoEQ7B"
        },
        {
            "name": "KM13 Health Center",
            "id": "LiArkN3HxGA"
        },
        {
            "name": "Timirshe Health Center",
            "id": "EeAMHlaPjlm"
        },
        {
            "name": "Bacaadwayn Health Center",
            "id": "cnV50bmkC6v"
        },
        {
            "name": "Jameco Health Center",
            "id": "G4J0xgPpSlJ"
        },
        {
            "name": "Ballidhidin TB Health Center",
            "id": "fxZDcAce5LQ"
        },
        {
            "name": "Buraan Health Center",
            "id": "Gmlp1vuIktt"
        },
        {
            "name": "Dharinbaar Primary Health Unit",
            "id": "wqgeO3kYY31"
        },
        {
            "name": "Dharkayn-Geenyo Health Center",
            "id": "bqjZcyxPATV"
        },
        {
            "name": "Xankookib PHU",
            "id": "itTYmyOcNgP"
        },
        {
            "name": "Kismayo General Hospital",
            "id": "k6BN0Q1YnAm"
        },
        {
            "name": "Haji Bube Health Center",
            "id": "jMwbywoX8VZ"
        },
        {
            "name": "Qalwo Primary Health Unit",
            "id": "fqfAGqvLmFg"
        },
        {
            "name": "Horumar Health Center",
            "id": "mOVBCACyShP"
        },
        {
            "name": "Dhahar Hospital",
            "id": "Is2uJXQFLox"
        },
        {
            "name": "Deynile Health Center",
            "id": "HzXyV8HXQj1"
        },
        {
            "name": "BRICS Mobile Health Clinic 1",
            "id": "uJfgOqHwofG"
        },
        {
            "name": "Shidle Primary Health Unit",
            "id": "cZiVarCjigg"
        },
        {
            "name": "SHINE Mobile Health Clinic",
            "id": "d7r9qPJuJGF"
        },
        {
            "name": "Balad Shardo Health Center",
            "id": "JC37d17CsqF"
        },
        {
            "name": "Ceeelmadoobe Primary Health Unit",
            "id": "aYdZI77CTe5"
        },
        {
            "name": "Dhaan kadus PHU",
            "id": "OPXfjQHEbuT"
        },
        {
            "name": "Korey Primary Health Unit",
            "id": "Zwkd8qJPRhM"
        },
        {
            "name": "Guuleed Private Hospital",
            "id": "q2C2qWrFUiW"
        },
        {
            "name": "Salaama Health Center",
            "id": "d2fSuOYnX3T"
        },
        {
            "name": "Elmegid Primary Health Unit",
            "id": "iw9ktgrJ91a"
        },
        {
            "name": "Raaga Celle Health Center",
            "id": "mrbVNRnZDxm"
        },
        {
            "name": "Uusgure Health Center",
            "id": "ZPv8VsydeNZ"
        },
        {
            "name": "Garacad Health Center",
            "id": "RcHVFvuXgsg"
        },
        {
            "name": "Mahas Mercy-USA Health Center",
            "id": "SWjcTgLNx07"
        },
        {
            "name": "Qoraxaad Primary Health Unit",
            "id": "Adt8ZcStV8G"
        },
        {
            "name": "Jilib TB Health Center",
            "id": "T0aq54U6eHc"
        },
        {
            "name": "RIS Health Center",
            "id": "wy6mztQtT2Z"
        },
        {
            "name": "Xangey Primary Health Unit",
            "id": "ask1ZG7ohLg"
        },
        {
            "name": "Luuq Outreach / Mobile Health Clinic",
            "id": "zQVbkXV2kL5"
        },
        {
            "name": "Towfiq Health Center",
            "id": "MPG7J4U58O3"
        },
        {
            "name": "Barawe TB Health Center",
            "id": "YPwJb4htrMD"
        },
        {
            "name": "Samaronle Primary Health Unit",
            "id": "QJabQlN3yJz"
        },
        {
            "name": "Buurdhubo Health Center",
            "id": "uLPR0P8f0t8"
        },
        {
            "name": "Carafaad Health Centre",
            "id": "suKBIkA6yP1"
        },
        {
            "name": "Godobyar Primary Health Unit",
            "id": "P6BnMLy0PfV"
        },
        {
            "name": "Howl-Wadaag Health Center",
            "id": "yJrCBVQWYRX"
        },
        {
            "name": "Lasadawaco Primary Health Unit",
            "id": "zS6MBZp317P"
        },
        {
            "name": "Jazeera Hospital",
            "id": "v0lL6ITdB3U"
        },
        {
            "name": "Surgaduud Primary Health Unit",
            "id": "IY0VrE3QaI3"
        },
        {
            "name": "Ceeljaale Health Centre(Wardi) ",
            "id": "hXL9H8Jz1Vq"
        },
        {
            "name": "Isbartiibo Health Center",
            "id": "HKwRNQaNcCN"
        },
        {
            "name": "Beled Hawo District Hospital",
            "id": "dvrwurXKhl6"
        },
        {
            "name": "Daarasalaam Health Center",
            "id": "eB8YyJFVwgP"
        },
        {
            "name": "Bowdo-Dhogore Primary Health Unit",
            "id": "r6tTeY24pm3"
        },
        {
            "name": "Dandan Health Center",
            "id": "z9ZOhMt3mX4"
        },
        {
            "name": "Mahaday ZAMZAM Health Center",
            "id": "TubItJHtXTs"
        },
        {
            "name": "Wadajir Health Center",
            "id": "Co1CXZrDYDr"
        },
        {
            "name": "Ba'adweyn Health Centre",
            "id": "bJZla7KJbsl"
        },
        {
            "name": "Mercy-USA TB Health Center",
            "id": "jP8dixNtbB4"
        },
        {
            "name": "Adada Plus Health Centre",
            "id": "rPFdyF8aqvZ"
        },
        {
            "name": "Kismayo Health Center",
            "id": "PfYFwepp3rR"
        },
        {
            "name": "Afguduudle Primary Health Unit",
            "id": "y1P6jn1XGtO"
        },
        {
            "name": "Moragaabey Health Center",
            "id": "nV04UoMYiWJ"
        },
        {
            "name": "1st July Health Center",
            "id": "OBPZKYBr7qx"
        },
        {
            "name": "Belet Hawo Outreach / Mobile Health Clinic",
            "id": "VJgDk9zMAp0"
        },
        {
            "name": "Galinsoor Health Center",
            "id": "kQNCuCyYFrD"
        },
        {
            "name": "Carmale Primary Health Unit",
            "id": "pYn5j0wfZwK"
        },
        {
            "name": "Manhal TB Health Center",
            "id": "msPhygutiQ4"
        },
        {
            "name": "Hosungow Health Center",
            "id": "kLcJeYCaErb"
        },
        {
            "name": "Idalle Primary Health Unit",
            "id": "TGh01DzwWst"
        },
        {
            "name": "Aykilaban Primary Health Unit",
            "id": "VdI5S6nvC7K"
        },
        {
            "name": "Huurshe Primary Health Unit",
            "id": "NCm29BJU6El"
        },
        {
            "name": "Qarxis Health Center",
            "id": "kJQTYsgp4ZP"
        },
        {
            "name": "Dhuure  Health Center",
            "id": "XgZIDiKJMaS"
        },
        {
            "name": "Riig Oomane Primary Health Unit",
            "id": "r7auBqLpEei"
        },
        {
            "name": "Daawad Health Center",
            "id": "e9hdyXGnl52"
        },
        {
            "name": "Tawakal  Health Center",
            "id": "ZzDr0TpQM28"
        },
        {
            "name": "Shiidle Health Center",
            "id": "HfCosEIep14"
        },
        {
            "name": "Bixin Primary Health Unit",
            "id": "FyF7SOcZpRV"
        },
        {
            "name": "Maandhere Health Center",
            "id": "KH5XDGf254m"
        },
        {
            "name": "Hudun Health Center",
            "id": "PLi8HxvnwC4"
        },
        {
            "name": "Nuro Health Center",
            "id": "TtIAASTr49s"
        },
        {
            "name": "Dhudhub Health Center",
            "id": "lyWhB2C0SwK"
        },
        {
            "name": "Alula TB Health Center",
            "id": "ziYpJTGPJ0C"
        },
        {
            "name": "Heegan Health Center",
            "id": "KG54EpYVkqE"
        },
        {
            "name": "Tasjic Primary Health Unit",
            "id": "SeGbFaWdCbo"
        },
        {
            "name": "Hudur TB Health Center",
            "id": "wFNVN2rXxHv"
        },
        {
            "name": "Shabeelle Health Center",
            "id": "I7NRJEZI5FE"
        },
        {
            "name": "Bocame Health Center",
            "id": "XMC2RnSGcxx"
        },
        {
            "name": "Libaw Primary Health Unit",
            "id": "Xb9fbISVY01"
        },
        {
            "name": "Ato Health Center",
            "id": "P1eYP4tqpAg"
        },
        {
            "name": "Bendarbayla District Hospital",
            "id": "Cu1bbmFAxme"
        },
        {
            "name": "Horseed Health Center",
            "id": "FxCBSqAC4ch"
        },
        {
            "name": "Maraye Health Center",
            "id": "DieJsMo5mzw"
        },
        {
            "name": "Hawa-Tako Health Center",
            "id": "z64EM8MO3Om"
        },
        {
            "name": "Adan Adde Health Center",
            "id": "nUbO1U7ZFts"
        },
        {
            "name": "Ubah Health Center",
            "id": "uTriBUKg5v7"
        },
        {
            "name": "Golofley Primary Health Unit",
            "id": "Sr0IAWogFzo"
        },
        {
            "name": "Jamama Health Center",
            "id": "ghk0itLMy4L"
        },
        {
            "name": "Dhagax Tuur Health Center",
            "id": "kYsKvCBWEyR"
        },
        {
            "name": "Hursale  Primary Health Unit",
            "id": "mLm2r0nb4XS"
        },
        {
            "name": "Hadaftimo Health Center",
            "id": "VxfNGTwVlm0"
        },
        {
            "name": "Bulo Marer TB Health Center",
            "id": "gMOxEhe19ja"
        },
        {
            "name": "Bakaal Health Center 1",
            "id": "Rn4KoQ30BAT"
        },
        {
            "name": "Ceelbuh Health Center",
            "id": "HWAC1dY53zr"
        },
        {
            "name": "Awal-Barwaaqo Primary Health Unit",
            "id": "Dab7AK6q3j8"
        },
        {
            "name": "Mahfalka Health Center",
            "id": "aPIk7o7Drdr"
        },
        {
            "name": "Mataban RI Health Center",
            "id": "XYt8VhRzJN6"
        },
        {
            "name": "Birqodoy Primary Health Unit",
            "id": "kG2aMxJfQX1"
        },
        {
            "name": "Ayub Health Center",
            "id": "hgkpGmFGwWu"
        },
        {
            "name": "Gargoore Primary Health Unit",
            "id": "eIPocclqZm9"
        },
        {
            "name": "Ayan Private Hospital",
            "id": "ojuaRn25xTl"
        },
        {
            "name": "Afgooye School Health Center",
            "id": "s6fdGrTj4DU"
        },
        {
            "name": "Bundaweyn Health Center Iftin",
            "id": "oQHCbRFzynm"
        },
        {
            "name": "Karin Primary Health Unit",
            "id": "tQMzT2ZIoeu"
        },
        {
            "name": "Badbaado HC",
            "id": "jVmRvzeLWpN"
        },
        {
            "name": "Afgoye SRCS Mobile Health Clinic",
            "id": "I6DaBPtcc0p"
        },
        {
            "name": "Deryel Community Hospital",
            "id": "XmXpciAT4A5"
        },
        {
            "name": "Kulub Primary Health Unit",
            "id": "lXZXn4J8zNy"
        },
        {
            "name": "Waab Arye Health Center",
            "id": "KWJVayPUbBw"
        },
        {
            "name": "Bardera Outreach / Mobile Health Clinic 2",
            "id": "YsEOHbdppjn"
        },
        {
            "name": "Balanbale Primary Health Unit",
            "id": "wOtQrQfc2nD"
        },
        {
            "name": "Bundoweyne Health Center",
            "id": "P18A1gSGJWd"
        },
        {
            "name": "Dhinawda Primary Health Unit",
            "id": "lCWdCA28sL7"
        },
        {
            "name": "Dr Sumait Hospital",
            "id": "GqhHSM1Ro1T"
        },
        {
            "name": "Waxaracade Health Center",
            "id": "Y61EXvgPjFa"
        },
        {
            "name": "Moyko Health Center",
            "id": "OOciYRibDlI"
        },
        {
            "name": "Garowe TB Hospital",
            "id": "tvK9nsVIX6Y"
        },
        {
            "name": "Camaara Health Center",
            "id": "TJHx4vqzh9D"
        },
        {
            "name": "Taageer Primary Health Unit Plus",
            "id": "fT8CSsa8BZz"
        },
        {
            "name": "Dharoor Health Center",
            "id": "wqLf5frT89u"
        },
        {
            "name": "Bayra Health Center",
            "id": "wHEqSQCdErE"
        },
        {
            "name": "Balad Intersos Health Center",
            "id": "GtMxOgEMtJe"
        },
        {
            "name": "Karaama Mobile Health Clinic",
            "id": "uijpaC42Q92"
        },
        {
            "name": "Laasxadow Mobile Clinic",
            "id": "V4Ku5TjQCL5"
        },
        {
            "name": "Wadajir Health Center",
            "id": "GXC1zx5fGWR"
        },
        {
            "name": "Halane Health Center",
            "id": "Zg6RcpU79c3"
        },
        {
            "name": "SRCS Berdale  Health Centre",
            "id": "M8SF8K7mAes"
        },
        {
            "name": "Bulajadid Health Center",
            "id": "UAQ0JY5Ndjc"
        },
        {
            "name": "Burcodheer Primary Health Unit",
            "id": "yEtjHnqsbkI"
        },
        {
            "name": "Bursaalax Health Center",
            "id": "UXhVJhPglkr"
        },
        {
            "name": "Dajimaale Primary Health Unit",
            "id": "YOypUjuXFty"
        },
        {
            "name": "Sahan Health Center",
            "id": "QRNgq0JGGkr"
        },
        {
            "name": "Beldaaje Health Center",
            "id": "EHMRN4Ztfkw"
        },
        {
            "name": "Ceel-Macaan Primary Health Unit",
            "id": "IRQGBP6hNZE"
        },
        {
            "name": "Beer dhagaxtuur Primary Health Centre",
            "id": "crhIpstz0mw"
        },
        {
            "name": "Janaale Health Center 2",
            "id": "XxryiQoBxov"
        },
        {
            "name": "Barawe District Hospital",
            "id": "GNTUPrF71ZJ"
        },
        {
            "name": "Marka TB Health Center 2",
            "id": "tPfGRGnIA6Q"
        },
        {
            "name": "Isnino Health Center",
            "id": "vPnPUJR1VES"
        },
        {
            "name": "Jaziira Health Center",
            "id": "ncFwLvRFdHE"
        },
        {
            "name": "Dowgaab Primary Health Unit",
            "id": "v0rx4Mo2HjN"
        },
        {
            "name": "El-Dhere Town District Hospital",
            "id": "goC4He0jsLf"
        },
        {
            "name": "Gocondhale Health Center",
            "id": "qr2dNnS4fvF"
        },
        {
            "name": "Jalam Health Center",
            "id": "bS6XV3XS0OX"
        },
        {
            "name": "Xaafun District Hospital",
            "id": "XeGWZhCWJm3"
        },
        {
            "name": "Diinsor TB Health Center",
            "id": "kczcZB7MCmF"
        },
        {
            "name": "Galbeed Health Center",
            "id": "sKD7GOOI8M2"
        },
        {
            "name": "Tiyeglow TB Health Center",
            "id": "LkFJIChupjV"
        },
        {
            "name": "Kalkal Private Hospital",
            "id": "IDAA4uW2Kf3"
        },
        {
            "name": "Goljano Health Center",
            "id": "KxRK5QU2sag"
        },
        {
            "name": "Ari Gaduud Health Center",
            "id": "lRvXo0r3wte"
        },
        {
            "name": "Qaanlaaye Primary Health Unit",
            "id": "y933qMogARX"
        },
        {
            "name": "Xararyaale Health Center",
            "id": "Biv3nnkSbkb"
        },
        {
            "name": "Jariiban Health Center",
            "id": "Z3KhQoLqHmi"
        },
        {
            "name": "Maandhere Health Center",
            "id": "nli0hFF7hth"
        },
        {
            "name": "Towfiiq Health Center",
            "id": "lrpZrBbGxEx"
        },
        {
            "name": "Buqaqable Health Center",
            "id": "ol6wgfAv0sc"
        },
        {
            "name": "Tieglow Town Health Center",
            "id": "G0YjencYekx"
        },
        {
            "name": "Hawa Tako Health Center",
            "id": "BM1FXh4FogR"
        },
        {
            "name": "Mareer Primary Health Unit",
            "id": "KaRGmORyi88"
        },
        {
            "name": "Tuur PHU",
            "id": "JmYFXYEi5GY"
        },
        {
            "name": "Dafdubay Health Center",
            "id": "IH0dqcSGZeG"
        },
        {
            "name": "Laasqoray Health Center",
            "id": "kxvBewWSHCW"
        },
        {
            "name": "Beer Gadid Health Center",
            "id": "Wj7vSUqIwun"
        },
        {
            "name": "Bur Ijabo Primary Health Unit",
            "id": "sCSPmsYq0IS"
        },
        {
            "name": "Wasil Health Center",
            "id": "jPIgqMpvYia"
        },
        {
            "name": "Barwaaqo Health Center",
            "id": "C632HKHXvqq"
        },
        {
            "name": "Geedo Bargan Health Center",
            "id": "SkINSPgGOUr"
        },
        {
            "name": "Galinsoor SRCS Health Center",
            "id": "QH3imrJUZDU"
        },
        {
            "name": "Waabyareey health center",
            "id": "y4ETEvxeK9V"
        },
        {
            "name": "Jowhar Regional Hospital",
            "id": "tRHvsMsAfkV"
        },
        {
            "name": "Yube Health Center",
            "id": "dTp0Eqfdf3U"
        },
        {
            "name": "Soyda Ceelasha Health Center",
            "id": "ReyXT3sgPbh"
        },
        {
            "name": "SRCS Waaberi Health Center",
            "id": "YigmPiAQaC3"
        },
        {
            "name": "Hananley Health Center",
            "id": "YlhzjA6hyFk"
        },
        {
            "name": "mahaas Health center",
            "id": "K5a0S4ocWPy"
        },
        {
            "name": "Xingood  Health Center",
            "id": "VO5vm1xEA3s"
        },
        {
            "name": "Berdale District Hospital",
            "id": "R4BzuQoYlFD"
        },
        {
            "name": "Harardere Town Health Center",
            "id": "TI6XcDLGOfQ"
        },
        {
            "name": "Taleh TB  Health Center",
            "id": "aILan0lgE6r"
        },
        {
            "name": "Cusbo Health Center",
            "id": "kYkRwImzP2c"
        },
        {
            "name": "Dabare Mobile Clinic",
            "id": "b14KK64IcRB"
        },
        {
            "name": "SOS Mother and Child Hospital",
            "id": "OzxwYAkzRk0"
        },
        {
            "name": "Uusgure Primary Health Centre",
            "id": "U87Pk0SUNpn"
        },
        {
            "name": "Hawal Wadag Health Center 2",
            "id": "LoZGBcPZEKl"
        },
        {
            "name": "Shaafici Health Center",
            "id": "hrsKG7AVbu6"
        },
        {
            "name": "Habar Ciro Health Center",
            "id": "jiMSWfLiPV5"
        },
        {
            "name": "Horsed Health Center",
            "id": "jA32NXeONma"
        },
        {
            "name": "Bitale Health Center",
            "id": "ibIHveHfOpU"
        },
        {
            "name": "Bogabeso  Health Center",
            "id": "tnvEmPZHnAa"
        },
        {
            "name": "Jalalaqsi Mercy-USA Health Center",
            "id": "KtP0McKCJVO"
        },
        {
            "name": "Madina Health Center",
            "id": "sFpIi4tY7Ls"
        },
        {
            "name": "Eldas Health Center",
            "id": "ZiIQJvkgQYj"
        },
        {
            "name": "Laag Primary Health Unit",
            "id": "CPb5jaeQCVp"
        },
        {
            "name": "South Galkacyo  Hospital",
            "id": "TMO6jerOMqn"
        },
        {
            "name": "Yed Health Center",
            "id": "SeMTrCDcsiM"
        },
        {
            "name": "Cigalcade Primary Health Unit",
            "id": "wZcycYOu4Jm"
        },
        {
            "name": "Dalxiiska Health Center",
            "id": "PzPlcb7Gwgw"
        },
        {
            "name": "Sool Joogto Primary Health Unit",
            "id": "LbhuCjSjsVs"
        },
        {
            "name": "Ceegag Primary Health Unit",
            "id": "OjMHpWL2vmO"
        },
        {
            "name": "Shaqaalaha Mobile/Outreach Health Team ",
            "id": "eHT9HklsEUG"
        },
        {
            "name": "Gaywerrow Health Center",
            "id": "zyFNuBSgNNN"
        },
        {
            "name": "Unsi Health Center",
            "id": "n6EwzxnxHVq"
        },
        {
            "name": "El-Dhere Primary Health Unit",
            "id": "PG5HjbZ2D3y"
        },
        {
            "name": "Waaberi Two Health Center ",
            "id": "BbovHH2uq0R"
        },
        {
            "name": "Shangani District Hospital",
            "id": "hoSQ06YPOnW"
        },
        {
            "name": "Siinka Dheer Health Center",
            "id": "agJJJdzCLyS"
        },
        {
            "name": "Diinsor District Hospital",
            "id": "xY7GVhQJVND"
        },
        {
            "name": "Sarmaan Primary Health Unit",
            "id": "t6x9E3y4Tnf"
        },
        {
            "name": "Gambool  Health Center",
            "id": "zEcXWqlvhln"
        },
        {
            "name": "Buurfuule Health Center",
            "id": "XX9gBgyoEM8"
        },
        {
            "name": "Balibusle Primary Health Unit",
            "id": "o2ii6Yv0USy"
        },
        {
            "name": "Olympic Health Center",
            "id": "MI73qYJbfzr"
        },
        {
            "name": "Wargaduud Primary Health Unit",
            "id": "y20HadjqPj1"
        },
        {
            "name": "Wadajir Jalalaqsi Health Center",
            "id": "NfLfJtqjILR"
        },
        {
            "name": "Buurane Health Center",
            "id": "xEfRomK34VL"
        },
        {
            "name": "Balcad District Hospital",
            "id": "mY003RXCKAH"
        },
        {
            "name": "Bangale Primary Health Unit",
            "id": "GS54DrPciUG"
        },
        {
            "name": "Wadajir Section Health Center",
            "id": "P7An4LxkKTm"
        },
        {
            "name": "Hawal Wadag SCI Health Center",
            "id": "be5TZs3cuMF"
        },
        {
            "name": "Hilmareer Health Center",
            "id": "tXdC4VE6erc"
        },
        {
            "name": "Bareeda Health Center",
            "id": "hQDyQkd3FLu"
        },
        {
            "name": "Isku Shuban Health Center",
            "id": "w4ahOtQPgY5"
        },
        {
            "name": "Baidoa TB Health Center",
            "id": "hfHDiWJqtjP"
        },
        {
            "name": "SRCS Mobile Health Clinic",
            "id": "ilI11jE7SEt"
        },
        {
            "name": "Qaydaro Primary Health Unit",
            "id": "ZOoK0cwGMkd"
        },
        {
            "name": "Kunaso Primary Health Unit",
            "id": "h8QK6MnjufV"
        },
        {
            "name": "Marka Health Center",
            "id": "C4Bpztc9adx"
        },
        {
            "name": "Jabad-Gele Health Cener",
            "id": "OZTn0yCTTls"
        },
        {
            "name": "Faafahdhuun Health Center 1",
            "id": "UkRPJkUSU1J"
        },
        {
            "name": "Kahda Health Center",
            "id": "bvnAolnqAiT"
        },
        {
            "name": "Mobile/Outreach Health & Nutrition Team 3 ",
            "id": "AQbmHD7q6Bx"
        },
        {
            "name": "Kaawa Godey Health Center",
            "id": "nXZzMaYsicA"
        },
        {
            "name": "Danwadaag Health Center",
            "id": "Bz5cfXUj5JS"
        },
        {
            "name": "Isha Health Center",
            "id": "CWr6CVvWpYy"
        },
        {
            "name": "Owdinle Section Health Center",
            "id": "zhtNXnUpztT"
        },
        {
            "name": "Elasha Health Center",
            "id": "tbFtk8inhQN"
        },
        {
            "name": "Qoryoley Health Center",
            "id": "JicTgVgrePZ"
        },
        {
            "name": "Ceel-Waaq TB Health Center",
            "id": "kb6JmEXbxKn"
        },
        {
            "name": "Sax-dheer Health Center",
            "id": "aI460gJ7Jvp"
        },
        {
            "name": "Tuulo Hiraan Health Center SCI",
            "id": "d8tELbXI9mU"
        },
        {
            "name": "Buula-Gaduud Health Center",
            "id": "V4QJJwkcIhP"
        },
        {
            "name": "Bakaal Health Center 2",
            "id": "AbRUjIDGijS"
        },
        {
            "name": "Bardera Outreach / Mobile Health Clinic 1",
            "id": "PfjmXl1ju5I"
        },
        {
            "name": "El-Dhere Town Health Center",
            "id": "B1FTNMaMFeQ"
        },
        {
            "name": "Berdale Bayeed Health Center (SAMA) ",
            "id": "tmoAO794d2Y"
        },
        {
            "name": "Warmaxan Health Center",
            "id": "F7Zgr0OLwCw"
        },
        {
            "name": "Marka Regional Hospital",
            "id": "p1UprO2tcvV"
        },
        {
            "name": "Barwaqo Primary Health Unit",
            "id": "wy8Fxyxg3Vg"
        },
        {
            "name": "Waaberi Health Center",
            "id": "WgjfAZOdurE"
        },
        {
            "name": "Wasaaradaha Health Center",
            "id": "SeGb3Z796B3"
        },
        {
            "name": "77 Health Center",
            "id": "TTK0jLfSHUo"
        },
        {
            "name": "Dollow Riverine Outreach / Mobile Health Clinic",
            "id": "R2fwPYAXMdl"
        },
        {
            "name": "Hawlwadag Health Center",
            "id": "PQPIWGpWZPu"
        },
        {
            "name": "Sinujiif  Health Center",
            "id": "DOE6wTabjWr"
        },
        {
            "name": "Mirjicley Primary Health Unit",
            "id": "BhUL4jaUW0B"
        },
        {
            "name": "Cawsane Health Center",
            "id": "DjS1LY6m489"
        },
        {
            "name": "Dhusay Primary Health Unit",
            "id": "WDo99xZDzm7"
        },
        {
            "name": "General Daud Health Center",
            "id": "wXqUxpphoWx"
        },
        {
            "name": "Qudus  Health Center",
            "id": "iZBbcgDijuu"
        },
        {
            "name": "Beledul Amiin Primary Health Unit",
            "id": "AOow4VEoK6u"
        },
        {
            "name": "Bardera Outreach / Mobile Health Clinic 3",
            "id": "rVCiC0VcYKL"
        },
        {
            "name": "Elberde Town Health Center",
            "id": "hZugEVKUGHb"
        },
        {
            "name": "Adada SOS Health Center",
            "id": "y0C9AMbvSCP"
        },
        {
            "name": "Buulow Health Center",
            "id": "Fguxu06Cqjl"
        },
        {
            "name": "Mahas WARDI Health Center",
            "id": "P6bgQG8hxmz"
        },
        {
            "name": "Hawal Wadag Health Center 1",
            "id": "pKSufP5bkaY"
        },
        {
            "name": "Horseed Health Center",
            "id": "XMkJ7qelzSs"
        },
        {
            "name": "Labatanjerow Health Center",
            "id": "sTRU5lWHHYy"
        },
        {
            "name": "Ceel-Jaale Health Center",
            "id": "ivszz7elmB2"
        },
        {
            "name": "Deynile District  Hospital",
            "id": "kS88oUmMUQ9"
        },
        {
            "name": "Wadajir Health Center",
            "id": "IUYFHORCUqm"
        },
        {
            "name": "Shangale Primary Health Unit",
            "id": "Rr8ze1i7FSh"
        },
        {
            "name": "Warsheikh Community Hospital",
            "id": "dXld2jWI67Z"
        },
        {
            "name": "Hawa-Tako Health Center",
            "id": "LLLKZOlJnep"
        },
        {
            "name": "Kullule Health Center",
            "id": "nJoA8Yek0nD"
        },
        {
            "name": "Bay Regional Hospital",
            "id": "C0AZz1ja2CZ"
        },
        {
            "name": "Alabaadir Health center",
            "id": "Iqb6VpKPDtS"
        },
        {
            "name": "Xalin Primary Health Unit",
            "id": "ov0f6umqQlW"
        },
        {
            "name": "Kaambo Health Center",
            "id": "QEpxb0S3bs8"
        },
        {
            "name": "Iskufilan Health Center",
            "id": "nSHbqknaIdE"
        },
        {
            "name": "Ceeljaale Health Center C(xawo tako)",
            "id": "zRM062t7Wk5"
        },
        {
            "name": "Jariban Mobile Health Unit",
            "id": "ODAnmDket1U"
        },
        {
            "name": "Laamxarar Primary Health Unit",
            "id": "BCs5MQBbaKG"
        },
        {
            "name": "Lugloow Mobile/Outreach Health Team",
            "id": "Gbyqf3X1oYp"
        },
        {
            "name": "Garduush Primary Health Unit",
            "id": "fgEVzjVw5dI"
        },
        {
            "name": "Bosnia Health Center",
            "id": "OOwEPCyE73C"
        },
        {
            "name": "Maryan Gubey Health Center",
            "id": "fPU1Ao7eQor"
        },
        {
            "name": "Habarre Village Health Center",
            "id": "hjCWwr7zs2S"
        },
        {
            "name": "Al-Furqaan Health Center",
            "id": "RgXKhRqexxS"
        },
        {
            "name": "Mareergur Health Center 2",
            "id": "SOFGi5xR2rm"
        },
        {
            "name": "Barawe Health Center",
            "id": "IgZBq2QSqUO"
        },
        {
            "name": "KM 50 Health Center",
            "id": "sVLKMGt94JC"
        },
        {
            "name": "Osweyne Health Center",
            "id": "PLvGOe9lhT5"
        },
        {
            "name": "Barkada Shariifada Mobile/Outreach Team",
            "id": "Xc5Kt94vbMw"
        },
        {
            "name": "Gargaar  Health Center",
            "id": "FYKjBv2k5Ul"
        },
        {
            "name": "Waabari  Health Center",
            "id": "XvVYqCphXdq"
        },
        {
            "name": "Waaberi Health Center",
            "id": "JKGlwKiuEJ7"
        },
        {
            "name": "Howl-Wadag Health Center",
            "id": "QYfI6pEPqvq"
        },
        {
            "name": "Jalalaqsi Health Center",
            "id": "r7eGWoAy5zm"
        },
        {
            "name": "Kobdhexaad Health Center",
            "id": "Lsz3ke4plez"
        },
        {
            "name": "Sayid Mohamed Health Center",
            "id": "sZYgR8DwqWS"
        },
        {
            "name": "Buul-Xuubey Health Center",
            "id": "wBm2yaccVse"
        },
        {
            "name": "Dolow Health Center",
            "id": "f5cTGEQfSz2"
        },
        {
            "name": "Fardhidin Primary Health Unit",
            "id": "dnAy5uSZplG"
        },
        {
            "name": "Iidoole Primary Health Unit",
            "id": "CHYX1rSy93n"
        },
        {
            "name": "Garbaharey Outreach / Mobile Health Clinic",
            "id": "QJXAvdIsDI3"
        },
        {
            "name": "Beled Hawo Health Center",
            "id": "ZCQGfXma4nI"
        },
        {
            "name": "IMC Mobile Health Clinic 1",
            "id": "rTQugusznLS"
        },
        {
            "name": "Garasbaley SOS Health Center",
            "id": "DdhVhicizod"
        },
        {
            "name": "Shimbiraale Health Center",
            "id": "zDI0Jf3kaCO"
        },
        {
            "name": "Xaarxaar Health Center",
            "id": "l1uvVHCRjwk"
        },
        {
            "name": "Israac Health Center",
            "id": "GGX0EOZRusc"
        },
        {
            "name": "Cadale Primary Health Unit",
            "id": "h2EZTKOax6w"
        },
        {
            "name": "Afgooye TB Health Center",
            "id": "NAsD2BoN3D4"
        },
        {
            "name": "Xingalool District Hospital",
            "id": "JIl7Hbhg6O9"
        },
        {
            "name": "Bangele Health Center",
            "id": "WMGuEbGXs9P"
        },
        {
            "name": "Yalho Primary Health Unit",
            "id": "etErTA6ySXI"
        },
        {
            "name": "Jeexdin HC",
            "id": "fWllJBMRwAy"
        },
        {
            "name": "Gubadley Health Center",
            "id": "sMKMsrLfSO4"
        },
        {
            "name": "Adado TB Health Center",
            "id": "EtZNBit44C5"
        },
        {
            "name": "Qansaxdhere Health Center",
            "id": "mrN1KGZHoJ5"
        },
        {
            "name": "Jariiban Hospital",
            "id": "ijvBrXs3SPR"
        },
        {
            "name": "Haaji-Khayr Health Center",
            "id": "MFCQQrl1ENQ"
        },
        {
            "name": "Qaw Health Center",
            "id": "ZVTY45X2NgQ"
        },
        {
            "name": "Ato Health Center",
            "id": "K9eZRUHVLly"
        },
        {
            "name": "Dollow Outreach / Mobile Health Clinic",
            "id": "Eu0vkuK7a5L"
        },
        {
            "name": "Hudur Hospital",
            "id": "V4qVTRmLO86"
        },
        {
            "name": "Kulmis Health Center",
            "id": "Nsmt3jSzKRr"
        },
        {
            "name": "Shaafici Health Center",
            "id": "hZJKBBmu9X8"
        },
        {
            "name": "Shilmadow Primary Health Unit",
            "id": "Wb1k0mFBs39"
        },
        {
            "name": "Duco Community Hospital ",
            "id": "RFWPvyMEJiu"
        },
        {
            "name": "Dhabad Primary Health Unit",
            "id": "SijepHna1p2"
        },
        {
            "name": "Halaboqad Health Center",
            "id": "W7t83D50w2E"
        },
        {
            "name": "War-Galo  Health Center",
            "id": "zrP0h6cSO1V"
        },
        {
            "name": "Shangani Health Center",
            "id": "qGd63bSLTwH"
        },
        {
            "name": "Midnimo District Hospital",
            "id": "hMsUmuuuV8S"
        },
        {
            "name": "Yocale Primary Health Unit",
            "id": "xvvKClioWbA"
        },
        {
            "name": "Mahadaay TB Health Center",
            "id": "FJ8H46snW5N"
        },
        {
            "name": "Forlanini Health Center",
            "id": "EL96p4cAcl4"
        },
        {
            "name": "Sugule Primary Health Unit",
            "id": "GqDhO9KT2Le"
        },
        {
            "name": "Fardows Health Center",
            "id": "ei7RsNRnRxj"
        },
        {
            "name": "Libiga Mobile Clinic",
            "id": "UnIP9NlvHK7"
        },
        {
            "name": "Waxweyne Health Center",
            "id": "S1cCn9XtkO1"
        },
        {
            "name": "Fafahdun SRCS OPD Health Center",
            "id": "TDLAHF4pvWQ"
        },
        {
            "name": "Waberi Health Center",
            "id": "LcTMEk1UaG2"
        },
        {
            "name": "Indian ocean Health Center",
            "id": "LHt7iMXTd7y"
        },
        {
            "name": "Jiic Dheere Primary Health Unit",
            "id": "UC9AM2uMSL6"
        },
        {
            "name": "Bula Nuuri Health Center",
            "id": "tJRb0rx4fzK"
        },
        {
            "name": "Ufain Health Center",
            "id": "PlD80iZUVur"
        },
        {
            "name": "Bayhaw Hospital",
            "id": "vYy0r6D1Dh2"
        },
        {
            "name": "Garsoor Health Center",
            "id": "UCd1Cn4hsdQ"
        },
        {
            "name": "Abow-Casharow Health Center",
            "id": "DfmpssnQWyl"
        },
        {
            "name": "Lafole Health Center",
            "id": "dT5ER3rQ1Q6"
        },
        {
            "name": "BRICS Mobile Health Clinic 2",
            "id": "B2BFUB5oTkK"
        },
        {
            "name": "Gumbax Health Center",
            "id": "nOCfp21uy4t"
        },
        {
            "name": "Xabsiga dhexe TB Health Center",
            "id": "dB6dn4eXqoM"
        },
        {
            "name": "Harfo Health Center",
            "id": "bQDNoBJYt90"
        },
        {
            "name": "Xubabays Primary Health Unit",
            "id": "SJAeTA6B5xl"
        },
        {
            "name": "Saacid Adale TB Health Center",
            "id": "pF3CXRUuyi5"
        },
        {
            "name": "Istanbul Health Health Center",
            "id": "CTzXMfhqElh"
        },
        {
            "name": "Luuq IDPS Outreach / Mobile Health Clinic",
            "id": "pFOA4bviKmj"
        },
        {
            "name": "Shabeelle Health Center",
            "id": "zmMhtMcSX3g"
        },
        {
            "name": "Huladuur Health Center",
            "id": "bpKZwN6xf75"
        },
        {
            "name": "Bayhaw Health Center",
            "id": "k5Z7MDxXq78"
        },
        {
            "name": "Ceel laas Primary Health Unit Plus",
            "id": "IMrhnPtzZYE"
        },
        {
            "name": "Erdogan National Hospital",
            "id": "r0wgUGUh9AO"
        },
        {
            "name": "Yaqbariwayne Primary Health Unit",
            "id": "UoY4jP2trYZ"
        },
        {
            "name": "Gedweyne Health Center",
            "id": "WadvkWVNgHc"
        },
        {
            "name": "Suuqa Xoolaha Health Center",
            "id": "TYID9D9NW2I"
        },
        {
            "name": "Harardhere TB Health Center",
            "id": "wFNxSDNWLNi"
        },
        {
            "name": "Canjeel Health Center ",
            "id": "BMcW6xHU3EC"
        },
        {
            "name": "Burdhuhunle Health Center",
            "id": "CAmMzCGulEt"
        },
        {
            "name": "Saqaaudiin Health Center",
            "id": "n7efGfIioa8"
        },
        {
            "name": "Dollow District Hospital",
            "id": "EqjpCjxW3ga"
        },
        {
            "name": "Kulmiye Health Center",
            "id": "AjirHxUasrY"
        },
        {
            "name": "Beled Hawo TB Health Center",
            "id": "TBCQA7yJSzH"
        },
        {
            "name": "Horumar Health Center",
            "id": "Zi7F2PcgFoe"
        },
        {
            "name": "Xingod Primary Health Unit",
            "id": "BvCtpm3LdD1"
        },
        {
            "name": "Waabari Health Center",
            "id": "Bd28HuKEafC"
        },
        {
            "name": "Gololey Health Center",
            "id": "IA8Rf0YJWYr"
        },
        {
            "name": "Issa Abdi Health Center",
            "id": "O4Yi63MDbxL"
        },
        {
            "name": "Saciid Roraye Health Center",
            "id": "RuNWesdpQhg"
        },
        {
            "name": "Harardheere Hospital",
            "id": "urchcoOid6z"
        },
        {
            "name": "Galdogob Hospital",
            "id": "TgmmnSWh7Ae"
        },
        {
            "name": "Tiirow Private TB Health Center",
            "id": "WAmnYq1LIRF"
        },
        {
            "name": "EYL mobile team",
            "id": "gy0PNDsfHmd"
        },
        {
            "name": "Community Health Center",
            "id": "npDKrCWKMvD"
        },
        {
            "name": "Hagarka Primary Health Unit",
            "id": "JVsC6OFEIx5"
        },
        {
            "name": "Bacadweyn District Hospital",
            "id": "qAZtlWWv1pJ"
        },
        {
            "name": "Malable Health Center",
            "id": "d2lGDPcW4Yf"
        },
        {
            "name": "Cawiye Health Center",
            "id": "ynzXREwlJ11"
        },
        {
            "name": "Gurdaan Mobile Health Clinic",
            "id": "Pjq91t3wQFd"
        },
        {
            "name": "Abesale Health Center",
            "id": "YLJBp8GBCXx"
        },
        {
            "name": "Boqolka  Bush Health Center",
            "id": "bfxmMA27PLA"
        },
        {
            "name": "Saaxo Health Center",
            "id": "h1nqVZ2PGBH"
        },
        {
            "name": "Xabaal Reer Primary Health Unit",
            "id": "z1xwFfUQd3L"
        },
        {
            "name": "Fiqifuliye Health Center",
            "id": "Rx2Sgou2BYF"
        },
        {
            "name": "Gidheys Primary Health Unit",
            "id": "RkzU9OUFtw1"
        },
        {
            "name": "Marergur Health Center",
            "id": "I4RoU6cKqEE"
        },
        {
            "name": "Xaar-Xaar Mobile Clinic",
            "id": "iR0zI4pZqXD"
        },
        {
            "name": "Ceelguula Health Center 2",
            "id": "IOBH3Gp24XF"
        },
        {
            "name": "Badey Health Center",
            "id": "ZgfcXZyNnYs"
        },
        {
            "name": "Eyl District Hospital",
            "id": "C1oHLVcUTO1"
        },
        {
            "name": "Kismayo TB Health Center",
            "id": "LwyRTQlyenV"
        },
        {
            "name": "Xero Jaale Primary Health Unit",
            "id": "mt5h2nqx2Ld"
        },
        {
            "name": "Barwaaqo Health Center",
            "id": "Xv1lxGbAjn4"
        },
        {
            "name": "Ali Atto Health Center",
            "id": "Vka4I07FDiW"
        },
        {
            "name": "Durdura Primary Health Unit",
            "id": "wWTXODOW39t"
        },
        {
            "name": "Harfo District Hospital",
            "id": "V0ZRi4Ph0Tj"
        },
        {
            "name": "Tawfiiq Health Center",
            "id": "SNT9n6kBANp"
        },
        {
            "name": "Caano Yaskax Primary Health Unit",
            "id": "s8njgb8bTvG"
        },
        {
            "name": "Kabasa Mobile/Outreach Health Team ",
            "id": "zWDy4rlU9fW"
        },
        {
            "name": "Madiina Health Center",
            "id": "uN7DgpHDDKM"
        },
        {
            "name": "Falaydh-Yale Health Center",
            "id": "uY4PtNu2zg0"
        },
        {
            "name": "Far-Libax Health Center 2",
            "id": "M54HVURjLld"
        },
        {
            "name": "Siigalow Health Center",
            "id": "kQlQmuHwwGR"
        },
        {
            "name": "Xawa Tako Health Center",
            "id": "QtgsVoAegWl"
        },
        {
            "name": "Faragoye Health center",
            "id": "XT6aNilJxps"
        },
        {
            "name": "Buula-Ablika Health Center",
            "id": "nM2vFFV22In"
        },
        {
            "name": "Awr Culus Health Center",
            "id": "w8GDvImipKD"
        },
        {
            "name": "Abow Primary Health Unit",
            "id": "abNq43enlkK"
        },
        {
            "name": "Kafi Private TB Hospital",
            "id": "GMic98GW7pS"
        },
        {
            "name": "Galkacyo-South TB Health Center",
            "id": "b2ldln2hl4f"
        },
        {
            "name": "Weydow Health Center",
            "id": "sjg2IOacsnT"
        },
        {
            "name": "Adale Shrdo Health Center",
            "id": "vmhsFZ0iwQy"
        },
        {
            "name": "Gololey Mobile Health Clinic",
            "id": "BjTu3rE5YTz"
        },
        {
            "name": "Bayhaw TB Health Center",
            "id": "KUHudc0DQa6"
        },
        {
            "name": "Banyaal Primary Health Unit",
            "id": "HgopLEpB1To"
        },
        {
            "name": "Haabo Health Center",
            "id": "qL6GfXS3fOI"
        },
        {
            "name": "Lafweyne Health Center",
            "id": "NANGQc2thnS"
        },
        {
            "name": "Gobsho Primary Health Unit",
            "id": "jqClWoueN5s"
        },
        {
            "name": "Ceelguula Health Center 1",
            "id": "crp4fxrwZod"
        },
        {
            "name": "Tawakal Health Centre",
            "id": "DE11F9GjFPZ"
        },
        {
            "name": "Koonfur Galbeed Health Center",
            "id": "kvypDkoH0JW"
        },
        {
            "name": "Bakool Regional Hospital",
            "id": "Cbe7koTflp8"
        },
        {
            "name": "Bakaar Weyn Primary Health Unit",
            "id": "E3G6t4DlBCw"
        },
        {
            "name": "Iskorsaar Primary Health Unit",
            "id": "PvYWAyfR0F9"
        },
        {
            "name": "Baidoa District Hospital",
            "id": "iCnwFHaWkp9"
        },
        {
            "name": "Bulo Sheik Health Center",
            "id": "zboi5R1bYWg"
        },
        {
            "name": "LEGO Health Center",
            "id": "WcyBdf0wJAS"
        },
        {
            "name": "Ceeldibir Health Center",
            "id": "F3QNPqfVZB3"
        },
        {
            "name": "Hudur Health Center",
            "id": "P60tmiPaL09"
        },
        {
            "name": "Sadumay Primary Health Unit",
            "id": "u88XnXSZkTT"
        },
        {
            "name": "Tawakal Health Center",
            "id": "nPlKpcyRE0z"
        },
        {
            "name": "Jilib Marka Health Center",
            "id": "MACAohuWpky"
        },
        {
            "name": "Suuqa Cowska Health Center",
            "id": "LHH1zfRnohW"
        },
        {
            "name": "Tulabarwaqo Health Center",
            "id": "VFlsoyLtP3S"
        },
        {
            "name": "Afgoye SRCS Health Center",
            "id": "UXtNnmdgK2i"
        },
        {
            "name": "Bura-wadal Primary Health Unit",
            "id": "swTfpHQY5iD"
        },
        {
            "name": "Jawiil Public Hospital",
            "id": "qE0kYMnulnE"
        },
        {
            "name": "Roox Primary Health Centre",
            "id": "P54HhpJSlvb"
        },
        {
            "name": "Baqbaq Primary Health Unit",
            "id": "r1p47JmYWJN"
        },
        {
            "name": "Berdalle MoH Health Center",
            "id": "gHBOgzvKahl"
        },
        {
            "name": "Burhakaba Health Center",
            "id": "wwONdPMcmXZ"
        },
        {
            "name": "Odweyne Health Center",
            "id": "FdmBsMVYxl8"
        },
        {
            "name": "Dalbile Health Center",
            "id": "DdPWC72iTm7"
        },
        {
            "name": "Doolawe Health Center",
            "id": "irL9WNmYkEN"
        },
        {
            "name": "Dhuur Primary Health Unit",
            "id": "Qv9TnLvvlI7"
        },
        {
            "name": "Garowaale Primary Health Unit",
            "id": "Wtcj4TIXIFi"
        },
        {
            "name": "Teerage Primary Health Centre",
            "id": "V6KsfWzUPVP"
        },
        {
            "name": "Adado District Hospital",
            "id": "Fv01rkru9PL"
        },
        {
            "name": "Bandiradley District Hospital",
            "id": "nVva8aWcxHW"
        },
        {
            "name": "Awdinle Health Center",
            "id": "qO12p3mtrot"
        },
        {
            "name": "Adale Health Center",
            "id": "R8UnewHm318"
        },
        {
            "name": "Ceeljaale Health center B(kooshin)",
            "id": "nbIXGQZNuDg"
        },
        {
            "name": "Zamzam Hospital",
            "id": "LvVwOulN0Rn"
        },
        {
            "name": "Kalkaal Health Center",
            "id": "eRUiVxwjBZA"
        },
        {
            "name": "Kormarey Health Center (SAMA)",
            "id": "E8dJEFd85y0"
        },
        {
            "name": "Faratooyo Primary Health Unit",
            "id": "TLDlcgY6Z6r"
        },
        {
            "name": "Garas-Goof Primary Health Unit",
            "id": "sxVj00QS9pW"
        },
        {
            "name": "Kabasa Health Center",
            "id": "ve1D79awsHt"
        },
        {
            "name": "Eyl TB Health Center",
            "id": "AuWgXkAmW0b"
        },
        {
            "name": "Mataban TB Health Center",
            "id": "VnpTW4d1PMR"
        },
        {
            "name": "Lowile READO Health Center",
            "id": "LJXG0QyQHtK"
        },
        {
            "name": "Xajinle Mobile Clinic",
            "id": "Y3D5bELc2TU"
        },
        {
            "name": "Buubi Primary Health Unit",
            "id": "Tfyd6CK7mF1"
        },
        {
            "name": "Mahas RI Health Center",
            "id": "eGorbWBlm7I"
        },
        {
            "name": "Waxarcade Health Center",
            "id": "Rg1EKvRsWJf"
        },
        {
            "name": "Garasbaley Health Center",
            "id": "FmvseqidrDP"
        },
        {
            "name": "Wadajir Health Center",
            "id": "DkHWDpuLGCl"
        },
        {
            "name": "Yako Health Center",
            "id": "mSU2JEInXiy"
        },
        {
            "name": "Kurtunwarey Maternity Hospital",
            "id": "pBdQGhd7Pys"
        },
        {
            "name": "Bossaso TB Hospital",
            "id": "GZNzFeOQiz5"
        },
        {
            "name": "Jilab  Health Center",
            "id": "evpeT6V6yLx"
        },
        {
            "name": "Shanqolow Health Center",
            "id": "QmqSfNJbHqX"
        },
        {
            "name": "Bali Ad Primary Health Unit",
            "id": "wpEz2YAN0Ua"
        },
        {
            "name": "Buula-Mareer Health Center 1",
            "id": "bkCdmC5Yoqb"
        },
        {
            "name": "Bohol-Garas Health Center",
            "id": "gDXG13mPv06"
        },
        {
            "name": "Sibaayo Primary Health Unit",
            "id": "gOeibDyqP7z"
        },
        {
            "name": "Abal 5 Health Centre",
            "id": "hA823lFAgtb"
        },
        {
            "name": "Badbaado Mobile Health Clinic",
            "id": "zosmvCsjZFB"
        },
        {
            "name": "Birta-Dheer Primary Health Unit",
            "id": "mjLYrUysm2M"
        },
        {
            "name": "Qansaxley IDP Health Center",
            "id": "yT3F9Q7bRKB"
        },
        {
            "name": "Shibis Health Center",
            "id": "eeYf7KQ0btI"
        },
        {
            "name": "Wadajir Health Center",
            "id": "wJqpp1wjfvW"
        },
        {
            "name": "Habiry Primary Health Unit",
            "id": "u9axqivQfrR"
        },
        {
            "name": "Wadajir Health Center",
            "id": "Di81QnJJvZv"
        },
        {
            "name": "Qooqaani Community Health Center",
            "id": "QZNSnRPg0E0"
        },
        {
            "name": "Howl-Wadag / Sh. Abron Health Center",
            "id": "zzyspYz2XxK"
        },
        {
            "name": "Malaasle Primary Health Unit",
            "id": "ev2SOwdnhZw"
        },
        {
            "name": "Bakin Health Center",
            "id": "b8uLIymkyZn"
        },
        {
            "name": "Tur-Jaalle Health Center",
            "id": "ZwEvqcmSiYJ"
        },
        {
            "name": "Jamhuria Health Center",
            "id": "eAzqQhClAhB"
        },
        {
            "name": "Beyra Primary Health Centre",
            "id": "bcuKnQHRCEG"
        },
        {
            "name": "Gurmad Health Center",
            "id": "VHqEICSCFDt"
        },
        {
            "name": "Dhagxanyacade Primary Health Unit",
            "id": "TZPoMHr9IIV"
        },
        {
            "name": "Kurman Commmunity Health Center",
            "id": "VuIbgNwY1EP"
        },
        {
            "name": "Halaboqad Health Center",
            "id": "Xo77B40XD8g"
        },
        {
            "name": "Qooqaani Health Center",
            "id": "qXCy4Yf04Uu"
        },
        {
            "name": "​Geel-doora Health Center",
            "id": "G7wBQuCcQPt"
        },
        {
            "name": "Dhobley TB Health Centre",
            "id": "AhZMaUVJkyx"
        },
        {
            "name": "Beled Aamin Primary Health Unit",
            "id": "uHbomKIEBZq"
        },
        {
            "name": "Kabaal Primary Health Unit",
            "id": "eM6OZo8Qnr4"
        },
        {
            "name": "Xaarxaar Healthy Center",
            "id": "YMV806jdsCA"
        },
        {
            "name": "Qoney Health Center",
            "id": "jQIKs5FUIn1"
        },
        {
            "name": "Ayaan TB Health Center",
            "id": "rBszb1iQtpp"
        },
        {
            "name": "Darasalam WV Health Center",
            "id": "xq9YbnVQuvm"
        },
        {
            "name": "Howl-Wadag Health Center",
            "id": "FSxoGWGa0M2"
        },
        {
            "name": "Suuqyare TB Health Center",
            "id": "Fe039G85O0N"
        },
        {
            "name": "Qoryoley TB Health Center",
            "id": "f0RH9beXnDQ"
        },
        {
            "name": "Xaaro Primary Health Unit",
            "id": "YgMHqdwdaYl"
        },
        {
            "name": "Burtinle District Hospital",
            "id": "xNy6bieFmkt"
        },
        {
            "name": "Al-Rahma Primary Health Unit",
            "id": "GPdRuKD1VSZ"
        },
        {
            "name": "Qardho General Hospital",
            "id": "ZHY3QA5KYAn"
        },
        {
            "name": "Towsweyn Health Center",
            "id": "H3raMPjOLVm"
        },
        {
            "name": "Kulbiyoow WASDA Health Center",
            "id": "iLPKtVw8Hpt"
        },
        {
            "name": "Garbaharey TB Health Center",
            "id": "oynDsRnMbcH"
        },
        {
            "name": "Doyale Health Center",
            "id": "uE9Bwmx9xGA"
        },
        {
            "name": "Bossaso Regional Hospital",
            "id": "radfMxhGXcV"
        },
        {
            "name": "Widhwidh Health Center",
            "id": "YmOnPSRoj1e"
        },
        {
            "name": "Mudiye Primary Health Unit",
            "id": "OdgkCWqfSaz"
        },
        {
            "name": "Horseed HC",
            "id": "QvjWhtts7V7"
        },
        {
            "name": "Bilcil Primary Health Unit",
            "id": "fcPd0FfUxoD"
        },
        {
            "name": "Galkacyo TB Hospital",
            "id": "IimgRFFF8sS"
        },
        {
            "name": "Godod Primary Health Centre",
            "id": "JFxMaO9plv1"
        },
        {
            "name": "SRCS Elbur Health Center",
            "id": "xBaZJHTtf00"
        },
        {
            "name": "Abudwak TB Health Center",
            "id": "jNOgNs7PgxN"
        },
        {
            "name": "Danwadaag Health Center",
            "id": "xPu57Z9hkik"
        },
        {
            "name": "Hanti-Wadag Health Center",
            "id": "QXEviN7zWHJ"
        },
        {
            "name": "Af-Barwaaqo Health Center",
            "id": "SbwNipPqGru"
        },
        {
            "name": "Galbeed Primary Health Unit",
            "id": "qJ9NrSTmkNT"
        },
        {
            "name": "Geriley Health Center",
            "id": "Q3TcLDS0vOw"
        },
        {
            "name": "Jowhar TB Health Center",
            "id": "Pv0BccBPh0S"
        },
        {
            "name": "Shimbiraale Health Center",
            "id": "Wvk1vMrOLCg"
        },
        {
            "name": "Jowhar Maternity Health Center",
            "id": "fgrZ4RM8Leu"
        },
        {
            "name": "Ceell-Waaq District Hospital",
            "id": "YmQWWMwxG9a"
        },
        {
            "name": "Jeedaal Primary Health Unit",
            "id": "ewMWKgxLmVG"
        },
        {
            "name": "Mogar Manyow Health Center",
            "id": "GSApB7MgLcq"
        },
        {
            "name": "Wargaduud Primary Health Unit",
            "id": "SPO9fdyWVKy"
        },
        {
            "name": "Abrone Health Center",
            "id": "bqeUV2XwyGW"
        },
        {
            "name": "Bud-Bud Health Center",
            "id": "Xg02qEnj3DE"
        },
        {
            "name": "Galbeed Health Center",
            "id": "r08fmTKcHCT"
        },
        {
            "name": "Amaana Healthy Center",
            "id": "eK3PW1A9Ibb"
        },
        {
            "name": "Hodan Health Center ",
            "id": "Z7ywLGvR4Uu"
        },
        {
            "name": "Marka TB Health Center 1",
            "id": "k8AeNSmXgaw"
        },
        {
            "name": "Rako Health Center",
            "id": "zd9IA7n9wUF"
        },
        {
            "name": "Kobdhexaad Primary Health Unit",
            "id": "XEhUt30ZItN"
        },
        {
            "name": "Diinsor Health Center",
            "id": "v41c3ZeWSLV"
        },
        {
            "name": "Dhanaane Primary Health Unit",
            "id": "Hbg5950e1Xl"
        },
        {
            "name": "Garaash Mobile Clinic",
            "id": "zoAtEuUo1lq"
        },
        {
            "name": "Galdogob TB Health Center",
            "id": "YAO3SCFNSUs"
        },
        {
            "name": "Siinka dheer Health Center",
            "id": "cW6dO3qUtUJ"
        },
        {
            "name": "Damalo Xagare Primary Health Unit",
            "id": "ebyEKKv54iN"
        },
        {
            "name": "Mudug Health Center",
            "id": "McTuttsbXNU"
        },
        {
            "name": "Fiqi Private Hospital",
            "id": "W0ejKW3KgKz"
        },
        {
            "name": "Jadad Primary Health Unit",
            "id": "WMfwcO8Kar5"
        },
        {
            "name": "Suubaan Primary Health Unit",
            "id": "cCmYRGGgDzD"
        },
        {
            "name": "Jamame  TB Health Center",
            "id": "u1Dk0Auu0mU"
        },
        {
            "name": "Kaskey Health Center",
            "id": "Wnl36jGITW0"
        },
        {
            "name": "Shalambod Health Center 2",
            "id": "ABPPWLoSJlE"
        },
        {
            "name": "Waaberi 2 (ARD) Health Centre",
            "id": "IWirQEzpqCx"
        },
        {
            "name": "Dhooba Cantuug Primary Health Unit",
            "id": "hBlsIbuwLea"
        },
        {
            "name": "Bu,ale TB Center",
            "id": "TUs6WpNGkAN"
        },
        {
            "name": "Labilamaane Primary Health Unit",
            "id": "T3zcSzr8ltJ"
        },
        {
            "name": "Barwaaqo Health Center",
            "id": "yAzfjzrNzg4"
        },
        {
            "name": "KM 50 Health Center 2",
            "id": "nWpisiC0qEf"
        },
        {
            "name": "Warsheikh Shardo Health Center",
            "id": "v1iuphf9Ogi"
        },
        {
            "name": "Adada SIRDA Health Center",
            "id": "g2iejmKou4K"
        },
        {
            "name": "Habar-Shiro Primary Health Unit",
            "id": "BEA2ND0Yedu"
        },
        {
            "name": "Xida Health Center",
            "id": "ar7NuZhb9v6"
        },
        {
            "name": "Caris Primary Health Unit",
            "id": "ndH9A4AOmFP"
        },
        {
            "name": "Ibado District Hospital",
            "id": "tqM2xHYAbrr"
        },
        {
            "name": "Bacaadaha Health Center",
            "id": "EdhX2GpFaxN"
        },
        {
            "name": "Meeri Primary Health Unit",
            "id": "Go7tlJ6fwhn"
        },
        {
            "name": "Halane Health Center",
            "id": "YFIKAed9Ucx"
        },
        {
            "name": "Aran Health Center",
            "id": "villpKviVqi"
        },
        {
            "name": "Dharkenta Health Center",
            "id": "MCpvBRHG693"
        },
        {
            "name": "Hodan Health Center",
            "id": "gZaEHucC9Hy"
        },
        {
            "name": "Shatilow World Vision Primary Health Unit",
            "id": "itObJ8IuepQ"
        },
        {
            "name": "Garas Bintow Health Center",
            "id": "NLP0z3oGigO"
        },
        {
            "name": "shacab Hospital",
            "id": "nuFkNTcdBUM"
        },
        {
            "name": "Hodan Health Center",
            "id": "laWPuyuLC1a"
        },
        {
            "name": "Lako Primary Health Unit",
            "id": "xKg0EzPQtCL"
        },
        {
            "name": "Midnimo  Health Center",
            "id": "maA9xbDufkY"
        },
        {
            "name": "Meygaag Primary Health Unit",
            "id": "XtIkNrcG7rD"
        },
        {
            "name": "Shangale Health Center",
            "id": "vPwGgYqVsW5"
        },
        {
            "name": "Dhusamarreb TB Health Center",
            "id": "SNguSHdF9kh"
        },
        {
            "name": "Gawaan Hospital",
            "id": "ceyYx0J3MYB"
        },
        {
            "name": "Waamo Health Center",
            "id": "Egy2hM4LkxW"
        },
        {
            "name": "Hilaac Health Center",
            "id": "LE95yofHZDM"
        },
        {
            "name": "Darasalam Health Center",
            "id": "o6QRvB1yWty"
        },
        {
            "name": "Qaran Roow Health Center",
            "id": "Ubs8ZBtEx7N"
        },
        {
            "name": "Wadajir Baldoos Health Center",
            "id": "cOh9zyNf5WL"
        },
        {
            "name": "Wadajir Health Center",
            "id": "ZMf5SeZ3Ef9"
        },
        {
            "name": "Dhuudo Health Center",
            "id": "qDFe1S9umR1"
        },
        {
            "name": "Baxnaano Health Center",
            "id": "mg6zZ9A17Aw"
        },
        {
            "name": "Heero Mobile Health Clinic",
            "id": "f4h50iSPhOQ"
        },
        {
            "name": "Dangoroyo mobile team",
            "id": "FcQfSJn1g37"
        },
        {
            "name": "Dharkenley Health Center",
            "id": "UXHbaVYMJ47"
        },
        {
            "name": "Barookhle Primary Health Unit",
            "id": "VenFRzD2BF5"
        },
        {
            "name": "Wajeer Health Center 2",
            "id": "xu4WOTjjCfU"
        },
        {
            "name": "Rako District Hospital",
            "id": "Pqk2bwXKiTT"
        },
        {
            "name": "Salax Health Center",
            "id": "ryCJHUe77jt"
        },
        {
            "name": "Ceel-Cade Health Center",
            "id": "B9Vzux3tcCc"
        },
        {
            "name": "October Health Center",
            "id": "WrERunHTSFe"
        },
        {
            "name": "Baraagahaqol Health Center",
            "id": "sTN3WV9MHqi"
        },
        {
            "name": "Ceegag Health Center",
            "id": "AfAPo6JDzyg"
        },
        {
            "name": "Dalsan Primary Health Unit",
            "id": "aAmHmnnqqow"
        },
        {
            "name": "Margaaga Primary Health Centre",
            "id": "w7MqWrh7Yme"
        },
        {
            "name": "Wadajir Health Center",
            "id": "zsbyPk9O7YO"
        },
        {
            "name": "Belet Weyne TB Health Center 1",
            "id": "uBbCPrqczZy"
        },
        {
            "name": "Horeseed  Health Center",
            "id": "nbHOIcjtD69"
        },
        {
            "name": "Balad TB Health Center",
            "id": "bzNeq5cIL5W"
        },
        {
            "name": "Burgabo Health Center",
            "id": "CnqDfOZotIQ"
        },
        {
            "name": "Dayax Health Center",
            "id": "Yk6L4mKMtFA"
        },
        {
            "name": "Makarey Health Center",
            "id": "l7zCBiLsYAh"
        },
        {
            "name": "Suqa Xoolaha Health Center",
            "id": "cnz8Onn7G4x"
        },
        {
            "name": "Warta Nabada Health Center",
            "id": "eJsAWf4o6gL"
        },
        {
            "name": "Ina Heybe Primary Health Unit",
            "id": "iuRgj9BgQBh"
        },
        {
            "name": "Tuula-Barwaaqo Primary Health Unit",
            "id": "IJz7yY95ZaE"
        },
        {
            "name": "Siinka Dheer Health Center",
            "id": "XKnHjUOfYS3"
        },
        {
            "name": "Iidaan Outreach / Mobile Health Clinic",
            "id": "xD0oLBkKn7V"
        },
        {
            "name": "Sh. Oyaye Health Center",
            "id": "UPTbR1stEKg"
        },
        {
            "name": "Dardaare Primary Health Unit",
            "id": "EAX7oriUnku"
        },
        {
            "name": "Ceelxagar Primary Health Unit",
            "id": "WJDXR11jW1t"
        },
        {
            "name": "Yeed MoH Health Center",
            "id": "CNL8ob3hBp8"
        },
        {
            "name": "Yardimeli Hospital",
            "id": "In2SVIG6ezt"
        },
        {
            "name": "Kurtunwaarey Health Center",
            "id": "NBkIZATIlMR"
        },
        {
            "name": "Badbaado Maternal Center",
            "id": "NJTGZ9SmAAu"
        },
        {
            "name": "Ceeldaahir Health Center",
            "id": "t1WYWuGnWJy"
        },
        {
            "name": "Nageeyle Health Center",
            "id": "qTmQx9AWEMc"
        },
        {
            "name": "Daba Qalooc Primary Health Unit",
            "id": "EbnOEPFO0bs"
        },
        {
            "name": "Awr-Bogays 2 Health Center",
            "id": "lxrGr7Ri3Hj"
        },
        {
            "name": "Xabaasha-Wacle Primary Health Unit",
            "id": "s9ijFpyxk6Q"
        },
        {
            "name": "Xaawo Taako Health Center",
            "id": "nLnsUC4B3ZT"
        },
        {
            "name": "Hool Wadaag Health Center",
            "id": "ZF1Efrq20RQ"
        },
        {
            "name": "Adisoone Primary Health Unit",
            "id": "FpcpI8evHkf"
        },
        {
            "name": "Sabid Health Center",
            "id": "eWBu3iXwJdt"
        },
        {
            "name": "Hanaano Private Hospital",
            "id": "Rv5M5SJ1WyE"
        },
        {
            "name": "Dayax Hospital",
            "id": "nHan1hit1o1"
        },
        {
            "name": "Hobyo Health Center",
            "id": "oHbzctjkJ9I"
        },
        {
            "name": "Arbiska Health Center",
            "id": "tGyZ5KrefTw"
        },
        {
            "name": "Keysaney Hospital",
            "id": "MbRCI12JZwO"
        },
        {
            "name": "Laas Gacameey Primary Health Unit",
            "id": "DD7ZxmuHs81"
        },
        {
            "name": "Dhar Jaale Primary Health Unit",
            "id": "gtenaJVr6v0"
        },
        {
            "name": "Siinay Health Center",
            "id": "sJJxHakoAcs"
        },
        {
            "name": "Doonyaale Health Center",
            "id": "pvzocCdsJZr"
        },
        {
            "name": "Abudwak Mobile Team",
            "id": "MJ9m69DcKtO"
        },
        {
            "name": "Margaaga Primary Health Unit",
            "id": "PhbG8nWR0xk"
        },
        {
            "name": "Sarmanyo Health Center",
            "id": "a6ynL5ABZRE"
        },
        {
            "name": "Raskanboni Hawl wadaag Health Center ",
            "id": "eJKoo2vJumX"
        },
        {
            "name": "Xiriio Health Center",
            "id": "NZ9eEYJA369"
        },
        {
            "name": "Xarago Primary Health Unit",
            "id": "n9HstuMGKrm"
        },
        {
            "name": "Taabto Health Center",
            "id": "zBujZaLUdbe"
        },
        {
            "name": "Bardera TB Health Center",
            "id": "Z5dsbY7tiY3"
        },
        {
            "name": "Galwasuge Health Center",
            "id": "kIdehWOevQV"
        },
        {
            "name": "Dagreebo Primary Health Unit",
            "id": "RyfydXULXwB"
        },
        {
            "name": "Baadi-Keen Health Center",
            "id": "EdPmXssiRBp"
        },
        {
            "name": "Bajeela Health Center",
            "id": "IGpLtjZ7oEh"
        },
        {
            "name": "Quurile Primary Health Unit",
            "id": "zne6a3utxbF"
        },
        {
            "name": "Buurdhubo Outreach / Mobile Health Clinic",
            "id": "I34CF4KWgxe"
        },
        {
            "name": "Berdelle Town Health Center",
            "id": "zix9JW0bG6x"
        },
        {
            "name": "Geri-Hel Primary Health Unit",
            "id": "XPBJq5oJsE2"
        },
        {
            "name": "Dhilaalo Primary Health Unit",
            "id": "AxtF1ryiek2"
        },
        {
            "name": "Magacley Primary Health Unit",
            "id": "Dfiif18UbeJ"
        },
        {
            "name": "Qarasor Primary Health Unit",
            "id": "SGucpzzYZKs"
        },
        {
            "name": "Burhakaba TB Health Center",
            "id": "VJLsRfO5ko2"
        },
        {
            "name": "Bulo Burte TB Health Center",
            "id": "Qi8J9zu3ymg"
        },
        {
            "name": "Mahaas TB Health Center",
            "id": "goPVZyiSUSr"
        },
        {
            "name": "Ladan IDP Health Center",
            "id": "sgAp1W9jehb"
        },
        {
            "name": "Mindigale Health Center",
            "id": "oBSTDK4rlN3"
        },
        {
            "name": "Afmadow District Hospital",
            "id": "BlZG9LxiWxq"
        },
        {
            "name": "Korkamareey Health Center",
            "id": "sUPLkqvsJOf"
        },
        {
            "name": "Biyooley Health Center",
            "id": "y2DrWNFx2Ra"
        },
        {
            "name": "Hamar JabJab  District Hospital",
            "id": "G2uHkX2FDTt"
        },
        {
            "name": "Farjano Mobile Health Clinic",
            "id": "IkSPQw4SP2B"
        },
        {
            "name": "Sheebaab Primary Health Unit",
            "id": "xTKqjg4eJS7"
        },
        {
            "name": "Burhakaba District Hospital",
            "id": "HFCYSFeB6Ki"
        },
        {
            "name": "Gerisa TB Health Center",
            "id": "laGINISEoMP"
        },
        {
            "name": "Sadex Xiglo Health Center",
            "id": "RlnYXeL5Mlj"
        },
        {
            "name": "Wadajir Primary Health Unit ",
            "id": "kvKYQgB0jQ9"
        },
        {
            "name": "Wajid TB Health Center",
            "id": "QKb2Oi7Mm9O"
        },
        {
            "name": "Mataban WARDI Health Center",
            "id": "MLKIqJoWPIG"
        },
        {
            "name": "Biyo Gaduud Primary Health Unit",
            "id": "GmxaefVjwxx"
        },
        {
            "name": "Hubal Private Hospital",
            "id": "Jax0TJBNr5L"
        },
        {
            "name": "Caraweyn Health Center",
            "id": "Nlq7N4JkXY2"
        },
        {
            "name": "Gawitho Health Center",
            "id": "MbGTPoIjnaz"
        },
        {
            "name": "Balad  Health Center",
            "id": "IbhEqE0psmf"
        },
        {
            "name": "Juba Valley Health Center",
            "id": "fNDV9Z5xDIu"
        },
        {
            "name": "Jameeco Mobile Health Clinic",
            "id": "GCvbjSrt0SP"
        },
        {
            "name": "Agaaran Health Center",
            "id": "jIqybMnhRoT"
        },
        {
            "name": "Balibusle Health Center",
            "id": "fIhZSiGjXXE"
        },
        {
            "name": "Banadir National Hospital",
            "id": "r8fyxGtKgL2"
        },
        {
            "name": "Qoton Health Center",
            "id": "obkLuAgMs2D"
        },
        {
            "name": "Yeed Xaafad Kowad Health Center",
            "id": "whlS9GASI2v"
        },
        {
            "name": "Badbaado Mobile/Outreach Health Team ",
            "id": "Tyh4QuHmvjP"
        },
        {
            "name": "Badhan TB Health Center",
            "id": "JrmCtgXn9gA"
        },
        {
            "name": "Dhobleey District Hospital",
            "id": "ZUkmnGUO4b1"
        },
        {
            "name": "Carta Primary Health Unit",
            "id": "mr86Mm1pYb7"
        },
        {
            "name": "Mayle Primary Health Unit",
            "id": "itGuJjdWTeD"
        },
        {
            "name": "Dhabad Health Center",
            "id": "AIYcl89I9xW"
        },
        {
            "name": "Garsoor Health Center",
            "id": "nrHH2TJxUJh"
        },
        {
            "name": "Golweyn Health Center",
            "id": "BxUAIo1vVSp"
        },
        {
            "name": "Elgab Health Center",
            "id": "gVZdH8LMUF4"
        },
        {
            "name": "Xadhadhan Health Center",
            "id": "ubWUTiKEFgs"
        },
        {
            "name": "Balibusle Health Center",
            "id": "W2qanKHK9BZ"
        },
        {
            "name": "Dalsan Primary Health Unit",
            "id": "dtVMJBEH4TL"
        },
        {
            "name": "Dawocalay Primary Health Unit",
            "id": "zjmimR26xlr"
        },
        {
            "name": "Salkudhoble Primary Health Unit",
            "id": "nP8WO5pccvR"
        },
        {
            "name": "Buulabartire Health Center ",
            "id": "yEAkETBXSlF"
        },
        {
            "name": "Cawaale Health Center",
            "id": "ydfwsbYgpjr"
        },
        {
            "name": "Burtinle Mobile health 2",
            "id": "Yr10veYJX37"
        },
        {
            "name": "Malakacey Primary Health Unit",
            "id": "zEqJYR9EC7P"
        },
        {
            "name": "Daarasalam Primary Health Unit",
            "id": "bx7ByqzEYPR"
        },
        {
            "name": "Martini Hospital",
            "id": "R7E0GopRPok"
        },
        {
            "name": "Hamar Jadid Health Center",
            "id": "MvaDUl26a3Z"
        },
        {
            "name": "Wadajir Waajid Health Center",
            "id": "Vjw1tEebZ1C"
        },
        {
            "name": "God-Qabobe Primary Health Unit",
            "id": "ycz3bnkQvGJ"
        },
        {
            "name": "Hananbure Health Center",
            "id": "yTNNGpTVYfR"
        },
        {
            "name": "Sarkus Health Center",
            "id": "l3rzHTtMA47"
        },
        {
            "name": "Beyra Primary Health Unit",
            "id": "XtYaVGrka8v"
        },
        {
            "name": "Ceelasha Health Center 2",
            "id": "BhVrWOorlB3"
        },
        {
            "name": "Salah Dhadhab Health Center",
            "id": "tYRW4mWokk6"
        },
        {
            "name": "Diif Health Center",
            "id": "iDBiiG1lxUb"
        },
        {
            "name": "Saynyar Primary Health Unit",
            "id": "N92Ith5CYOS"
        },
        {
            "name": "Central Health Center",
            "id": "wiaG2AYtMNt"
        },
        {
            "name": "Jiingada Primary Health Unit",
            "id": "Rq1IGQR8glB"
        },
        {
            "name": "Horufadhi Health Center",
            "id": "G2ruZBrgUus"
        },
        {
            "name": "Xoosh Health Center",
            "id": "vmNY8Gda9Z0"
        },
        {
            "name": "El-Dhere TB Health Center",
            "id": "THJtPHggpCd"
        },
        {
            "name": "Kurdamac Health Center",
            "id": "ldt9aRSDLEE"
        },
        {
            "name": "Garowe General Hospital",
            "id": "Xw3rqUE2urh"
        },
        {
            "name": "Waaberi Health Center",
            "id": "d6BKZJo5Hqt"
        },
        {
            "name": "Eyl Mobile Health Unit",
            "id": "LN3hdhhl9gS"
        },
        {
            "name": "Galkayo Central Health Center",
            "id": "QYvTMd0bkBU"
        },
        {
            "name": "Elsha Primary Health Unit",
            "id": "sRLj61rkM1l"
        },
        {
            "name": "Roox Primary Health Unit",
            "id": "GEMHy72nugN"
        },
        {
            "name": "Shabele Health Center",
            "id": "tradJINjxc6"
        },
        {
            "name": "Alula District Hospital",
            "id": "LSkSee2ogU6"
        },
        {
            "name": "Murcanyo Health Center",
            "id": "JZ9Zo6F75xr"
        },
        {
            "name": "Garan Primary Health Unit",
            "id": "NQz5ksWYxO9"
        },
        {
            "name": "Buula Kuuloow Health Center",
            "id": "vWgWM4oBITr"
        },
        {
            "name": "Qandala Health Center",
            "id": "MrHVMjri8Uh"
        },
        {
            "name": "Yeed Xaafad Labad Health Center",
            "id": "V0DkHSCnPRe"
        },
        {
            "name": "Buruc Primary Health Unit",
            "id": "nhADLkSAegF"
        },
        {
            "name": "Badhan Hospital",
            "id": "oxOFHt4Sry4"
        },
        {
            "name": "Baybook Hospital",
            "id": "FGW2BwqHPu9"
        },
        {
            "name": "Buloburte RI Health Center",
            "id": "UQ7drGzHQg6"
        },
        {
            "name": "Libaxar Primary Health Unit",
            "id": "y3OjYLp8qCY"
        },
        {
            "name": "Garasweyne Health Center",
            "id": "PBxX3NtJHzI"
        },
        {
            "name": "Alxamduliah Primary Health Unit",
            "id": "dBww6c4PKT4"
        },
        {
            "name": "Soyda Lafole Health Center",
            "id": "iPHJx2v7VlG"
        },
        {
            "name": "Geesa qabad Primary Health Unit",
            "id": "PlMm25CTRCM"
        },
        {
            "name": "Tooxin Primary Health Unit",
            "id": "X5jSvFcJEz1"
        },
        {
            "name": "Buula Garasey Mobile/outreach Health Team",
            "id": "UsT9G0zAHw0"
        },
        {
            "name": "Aftug-weyne PHU",
            "id": "aXmna4gmZT5"
        },
        {
            "name": "Buur-Dhuxule Health Center",
            "id": "CrJvqIS31Ax"
        },
        {
            "name": "Goobweyn Health Center",
            "id": "L71ymzDZtB5"
        },
        {
            "name": "Jalaqsi District Hospital",
            "id": "ktrAoBsZNky"
        },
        {
            "name": "Somali Sudanese Hospital",
            "id": "jDnZ1zU3Na5"
        },
        {
            "name": "Adan salog Health Center",
            "id": "Ub0k6h4OtmM"
        },
        {
            "name": "Bahdo Health Center",
            "id": "dsMTQAfS8Y0"
        },
        {
            "name": "Ceelducaale Primary Health Unit",
            "id": "xM7SwtN3hzq"
        },
        {
            "name": "Saynwayn Primary Health Unit",
            "id": "ZRKrXXkJQWQ"
        },
        {
            "name": "GMC Private TB Health Center",
            "id": "NJjLuEfav4K"
        },
        {
            "name": "Holwadag Health Center",
            "id": "MnjssgNDhHf"
        },
        {
            "name": "Isterlin Community Hospital",
            "id": "zOyQEVvKcga"
        },
        {
            "name": "Dhahar TB Health Center",
            "id": "i6IEJEQyqEa"
        },
        {
            "name": "Abu Bashir Private Hospital",
            "id": "irsAWW4EPy1"
        },
        {
            "name": "Ummah Private Hospital",
            "id": "GenLkwz9sOa"
        },
        {
            "name": "Jowle Health Center",
            "id": "KVWZnUopCT0"
        },
        {
            "name": "Horseed Health Center",
            "id": "JM0Zvx42CqL"
        },
        {
            "name": "Reemati Primary Health Unit",
            "id": "cI3WVfMrZtI"
        },
        {
            "name": "Waabari Health Center",
            "id": "NTmiIZpOPkz"
        },
        {
            "name": "Belet Weyne Hospital",
            "id": "Cg4TMcJa9oB"
        },
        {
            "name": "Nasiib Health Center",
            "id": "ZF7CGOjCkbQ"
        },
        {
            "name": "Baxnaano Maternal Center",
            "id": "DfbsGZrevah"
        },
        {
            "name": "Bulla-Jimac Health Center",
            "id": "kw524RfEVDR"
        },
        {
            "name": "Bandarqaali Health Center",
            "id": "y5I34aWmYJv"
        },
        {
            "name": "Gofgaduud Burey Health Center",
            "id": "CTk4zOpn3ok"
        },
        {
            "name": "Farjano Health Center",
            "id": "eQjLn20L6UO"
        },
        {
            "name": "Goof-Gaduud Burey (SYEDO) HC",
            "id": "qK5sOaZUhQQ"
        },
        {
            "name": "Guudcad Primary Health Unit",
            "id": "o0fboa3pUnT"
        },
        {
            "name": "Buqaqable TB Health center",
            "id": "BzkQfr0VKuR"
        },
        {
            "name": "Turmasaale PHU",
            "id": "fSmaAyr5khQ"
        },
        {
            "name": "Madina Police Hospital",
            "id": "aMmXotALmVg"
        },
        {
            "name": "Hanooy Primary Health Unit",
            "id": "hNlvoMw35Xz"
        },
        {
            "name": "Tula Ciise PHU",
            "id": "RPz3ObfGyCL"
        },
        {
            "name": "Warjirow Health Center",
            "id": "KMybcuuRWCQ"
        },
        {
            "name": "Herale Health Center",
            "id": "wsc7LBcxEFk"
        },
        {
            "name": "Ceel-Waaq Health Center",
            "id": "ElwrF8PqcPb"
        },
        {
            "name": "Hakaba District Hospital",
            "id": "ZLPBQNwdlvz"
        },
        {
            "name": "Budunbuto Primary Health Unit",
            "id": "RZemEYAbLUo"
        },
        {
            "name": "Qaw Primary Health Unit",
            "id": "kGv36qqTDX8"
        },
        {
            "name": "Section 2  Health Center",
            "id": "dmqQVyQFCDV"
        },
        {
            "name": "Seydelow Area Health Center",
            "id": "U7v2iB95qUk"
        },
        {
            "name": "Fii-Afmadow Health Center",
            "id": "R0RC8OW0Opq"
        },
        {
            "name": "Laba Ceel Primary Health Unit",
            "id": "m2zyULqr8p7"
        },
        {
            "name": "Calanley Health Center",
            "id": "ZKPBpdt408p"
        },
        {
            "name": "Hantiwadag Health Center",
            "id": "PlBSQ2BsOj0"
        },
        {
            "name": "Fanoole Health Center",
            "id": "GS77ALOzr6y"
        },
        {
            "name": "Waciye  District Hospital",
            "id": "uHQFEq6axbt"
        },
        {
            "name": "Docol Health Center",
            "id": "CYVEBoyMa07"
        },
        {
            "name": "Darasalam TB  Health Center",
            "id": "obbwotuXZ2J"
        },
        {
            "name": "Barwaqo Health Center",
            "id": "vWrcdy1e4jB"
        },
        {
            "name": "Gobsho Primary Health Centre",
            "id": "o4bqrRiJAz7"
        },
        {
            "name": "Afmadow TB Health Center",
            "id": "rZGmWbcbqIR"
        },
        {
            "name": "Duud Hoyo Primary Health Unit",
            "id": "KXVOVRfHepr"
        },
        {
            "name": "Rad Primary Health Unit",
            "id": "ASBvtin4XPR"
        },
        {
            "name": "Waaberi Health Center",
            "id": "JwJZJQFbZpA"
        },
        {
            "name": "Israac  Health Center",
            "id": "kSeoiOH11oA"
        },
        {
            "name": "SRCS Qansax Oomane Health Center",
            "id": "nd5llQTmW7X"
        },
        {
            "name": "Ceelquud Primary Health Unit Plus",
            "id": "RHR4dnG8k1x"
        },
        {
            "name": "Aargaani Health Center",
            "id": "o7KLy8HNRqu"
        },
        {
            "name": "Godod Primary Health Unit",
            "id": "kXspwmrVQ38"
        },
        {
            "name": "Gudhaa Health Center",
            "id": "POuh8EvQiiN"
        },
        {
            "name": "Daarusalaam Primary Health Unit",
            "id": "KPexC6yfnU2"
        },
        {
            "name": "Jalalaqsi TB Health Center",
            "id": "arIb53POk9V"
        },
        {
            "name": "Bilcil Primary Health Centre",
            "id": "aSSZS95Woze"
        },
        {
            "name": "Dhaadaar Primary Health Unit",
            "id": "Y6GxCDp96vK"
        },
        {
            "name": "Ribo Health Center",
            "id": "zGipZ7iPy1a"
        },
        {
            "name": "Hodan Health Center",
            "id": "Aa8qnH1mMNJ"
        },
        {
            "name": "Badhan Health Center",
            "id": "cw4yCViZQG1"
        },
        {
            "name": "Sablale Health Center",
            "id": "TDZIsaycMi6"
        },
        {
            "name": "Jowle Health Center",
            "id": "tY6QlJCSSiD"
        },
        {
            "name": "Buula-Mareer Health Center 2",
            "id": "FXotHg4rUjT"
        },
        {
            "name": "Mahas General Hospital",
            "id": "JZFz5sCN3H1"
        },
        {
            "name": "Seemade Primary Health Unit",
            "id": "oHynA8fU64b"
        },
        {
            "name": "Harfo Refferal Health Center",
            "id": "uq6PfEvb85i"
        },
        {
            "name": "Fikta Primary Health Unit",
            "id": "U4ohFRkLV6X"
        },
        {
            "name": "Tabelah Mobile Health Clinic",
            "id": "mGqhfXKukT4"
        },
        {
            "name": "Tuula Hiiran Health Center",
            "id": "OEIBIMc8yAf"
        },
        {
            "name": "Wanla-Weyn Health Center",
            "id": "vJmGV4XKXjn"
        },
        {
            "name": "Kaladhacda Health Center",
            "id": "d902tllFsIz"
        },
        {
            "name": "Halgan Health Center",
            "id": "ysnkVNub7QH"
        },
        {
            "name": "Ceelgaal Primary Health Unit",
            "id": "tlblh0WqYt9"
        },
        {
            "name": "Hanaana Health Center",
            "id": "KMSwzCnzFAO"
        },
        {
            "name": "Dharkayn-Geenyo Health Centre",
            "id": "tXDHSSYGKRu"
        },
        {
            "name": "Elberde District Hospital",
            "id": "HWPFhYJn2Y8"
        },
        {
            "name": "Akara Health Center",
            "id": "VVO9zIHjc0V"
        },
        {
            "name": "Bilan Health Center",
            "id": "BtWSb3VJBLt"
        },
        {
            "name": "Howl-Wadag SRCS Health Center",
            "id": "QOjyu4lyCUP"
        },
        {
            "name": "Garbaharey District Hospital",
            "id": "qHC6PLR5XPK"
        },
        {
            "name": "Qardho Mobile Health Unit",
            "id": "xt8YibSPD9s"
        },
        {
            "name": "Ibnusinaa Private Hospital",
            "id": "EzIuXcpYYxa"
        },
        {
            "name": "Xaarxaar Health Center",
            "id": "ekXxuZsxAoe"
        },
        {
            "name": "Qardho TB Health Center",
            "id": "bMvNu2ex1a2"
        },
        {
            "name": "Xingalool Health Center",
            "id": "xwVXU22cGZE"
        },
        {
            "name": "KAAH Health Center",
            "id": "a4jbsDsZrdB"
        },
        {
            "name": "Neero Health Center",
            "id": "AowSdBzpP7h"
        },
        {
            "name": "Herale TB Health Center",
            "id": "IBXNZa1aiC6"
        },
        {
            "name": "Laanmadow Primary Health Unit",
            "id": "H96pbJSEQcy"
        },
        {
            "name": "Carooley Health Center",
            "id": "UCSOHdEWTxY"
        },
        {
            "name": "KM12 Health Center",
            "id": "SYqTCKGHS0g"
        },
        {
            "name": "AHMED GUREY Health Center",
            "id": "xMb6GRhe5fi"
        },
        {
            "name": "Qalimow Health Center",
            "id": "pWBouWqRoba"
        },
        {
            "name": "Awal Barwaqo MT1",
            "id": "MJTLVjedoHX"
        },
        {
            "name": "Jawil Health Center",
            "id": "UHe6N0Jjxaz"
        },
        {
            "name": "Isku Shuban District Hospital",
            "id": "JM0Dic1FcsO"
        },
        {
            "name": "Central / Ugasyasin Health Center",
            "id": "ns8dRXqFLdr"
        },
        {
            "name": "1-Da Luuliyo Health Center",
            "id": "nSMAwwAcahH"
        },
        {
            "name": "Shabeelow Primary Health Unit",
            "id": "eUUb00j2M3R"
        },
        {
            "name": "21 October Health Center",
            "id": "OWQFjwDTmrC"
        },
        {
            "name": "Laaso-curdin Primary Health Centre",
            "id": "mhNLX2gzKvm"
        },
        {
            "name": "Baarmadoobe Primary Health Unit",
            "id": "d9HjJylyHCq"
        },
        {
            "name": "Garsoor  Mardo Health Center",
            "id": "cCF6cn0bR7K"
        },
        {
            "name": "Waberi Health Center",
            "id": "a8gWgD6AQHE"
        },
        {
            "name": "El Ali Health Center",
            "id": "zSeGZZA3qiT"
        },
        {
            "name": "Mahadaay Health Center",
            "id": "GsWaaplaEQh"
        },
        {
            "name": "Hamar Wayne Health Center",
            "id": "VybJmSRdUto"
        },
        {
            "name": "Qoryoley District Hospital",
            "id": "JHKWknpdEgR"
        },
        {
            "name": "Dangoroyo Health Center",
            "id": "Ac5D6R6Jssz"
        },
        {
            "name": "Dhagaxdher Primary Health Unit",
            "id": "om9KwPUO2ui"
        },
        {
            "name": "Gawaan Health Center",
            "id": "pYbStV4ZXiO"
        },
        {
            "name": "Iidan Primary Health Unit",
            "id": "ubFcl36BuAO"
        },
        {
            "name": "Sh. Aweys Health Center",
            "id": "wMvODpeN8YK"
        },
        {
            "name": "Xamxama Primary Health Unit",
            "id": "JWlrTKsC7i5"
        },
        {
            "name": "Wadajir Health Center 1",
            "id": "eVRK0J4nVWU"
        },
        {
            "name": "Waberi Washiton Health Centre",
            "id": "kZu0cdnd1zU"
        },
        {
            "name": "Agaaran Health Center",
            "id": "ogrtOoOAI4b"
        },
        {
            "name": "Heema Primary Health Centre",
            "id": "tqCpjeYPJ4q"
        },
        {
            "name": "Galole Hudur Health Center",
            "id": "xvJqK6upfkL"
        },
        {
            "name": "Daryeel Health Center",
            "id": "uOMJsy9zwAv"
        },
        {
            "name": "Shalambod Health Center 1",
            "id": "AiUe6zmnqh4"
        },
        {
            "name": "Yoonbays Health Center",
            "id": "AYuWwjVq8dH"
        },
        {
            "name": "Sax-dheer Health Centre",
            "id": "fvDmkSqCqpO"
        },
        {
            "name": "Gerijir Primary Health Unit",
            "id": "tPzAe6PS9Gl"
        },
        {
            "name": "Faanoole Health center",
            "id": "f5s0ebKf4Q7"
        },
        {
            "name": "Bandiradley Health Center",
            "id": "igAMGnQ7bfx"
        },
        {
            "name": "Daryeel Health Center",
            "id": "OXmcIgzUb44"
        },
        {
            "name": "Horseed DMO Section Health Center",
            "id": "npdRQK8CkGf"
        },
        {
            "name": "Far-Libax Health Center 1",
            "id": "oyya3usJDcl"
        },
        {
            "name": "Dhagxanyacade Primary Health Centre",
            "id": "VQf0DhWZgaV"
        },
        {
            "name": "Buul-Xuubey TB Health Center",
            "id": "GkLgl1itHq0"
        },
        {
            "name": "Dagaari Health Center",
            "id": "A2dw01K1gUg"
        },
        {
            "name": "Bendarbayla TB Health Center",
            "id": "urNpYRUuREh"
        },
        {
            "name": "Jabuti Health Center",
            "id": "UgMN3Wf52NG"
        },
        {
            "name": "Dhamasa Health Center",
            "id": "naT4Cf1aK4W"
        }
    ]
} as any as Program

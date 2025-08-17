import React  from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/Header";
import Body from "./component/Body";




const resList = [
     
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "705473",
                            "name": "Delhi Kitchen",
                            "cloudinaryImageId": "ee0c86496cd11e53724dda5ca6067fad",
                            "locality": "Opp Shanti Nagar",
                            "areaName": "Bibwewadi",
                            "costForTwo": "₹250 for two",
                            "cuisines": [
                                "North Indian",
                                "Chinese",
                                "South Indian",
                                "Snacks",
                                "Biryani",
                                "Thalis",
                                "Beverages"
                            ],
                            "avgRating": 4.1,
                            "veg": true,
                            "parentId": "311",
                            "avgRatingString": "4.1",
                            "totalRatingsString": "441",
                            "sla": {
                                "deliveryTime": 29,
                                "lastMileTravel": 1.1,
                                "serviceability": "SERVICEABLE",
                                "slaString": "25-30 mins",
                                "lastMileTravelString": "1.1 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 23:30:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "25% OFF",
                                "shortDescriptionList": [
                                    {
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "Get every item @ 79",
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "Get every item @ 99",
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                    "description": "pureveg"
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=705473&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "55048",
                            "name": "Shreeji Pure Veg",
                            "cloudinaryImageId": "3a3529dee7ead945e04d60f388dbcea4",
                            "locality": "Katraj",
                            "areaName": "Katraj",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "North Indian",
                                "Punjabi",
                                "Chinese",
                                "South Indian"
                            ],
                            "avgRating": 4.3,
                            "parentId": "11161",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "25K+",
                            "promoted": true,
                            "adTrackingId": "cid=32038588~p=24~adgrpid=32038588#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=55048~plpr=COLLECTION~eid=50b30afb-395c-4de5-bb17-0c125ad5a1d6~srvts=1755323186052~collid=80475",
                            "sla": {
                                "deliveryTime": 32,
                                "lastMileTravel": 3.7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "30-35 mins",
                                "lastMileTravelString": "3.7 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 23:59:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "50% OFF",
                                "shortDescriptionList": [
                                    {
                                        "meta": "Use TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                    "description": "pureveg"
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "2.5K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "32038588"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=55048&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "721879",
                            "name": "Hyderabadi Biryani House",
                            "cloudinaryImageId": "fcad94af696fcae690cf0cccec9e2a2f",
                            "locality": "Shivraj Nagar",
                            "areaName": "Bibwewadi",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "North Indian"
                            ],
                            "avgRating": 2.9,
                            "parentId": "385272",
                            "avgRatingString": "2.9",
                            "totalRatingsString": "39",
                            "sla": {
                                "deliveryTime": 25,
                                "lastMileTravel": 1.4,
                                "serviceability": "SERVICEABLE",
                                "slaString": "20-25 mins",
                                "lastMileTravelString": "1.4 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 23:15:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "60% OFF",
                                "shortDescriptionList": [
                                    {
                                        "meta": "Free Delivery",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "60% off on all orders",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "Free delivery",
                                        "discountType": "FREE_DELIVERY",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textExtendedBadges": {},
                                    "textBased": {},
                                    "imageBased": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=721879&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "70611",
                            "name": "Shreeji Pure Veg (Narhe)",
                            "cloudinaryImageId": "06fa964f232bf2e37d2cc9943f61b464",
                            "locality": "Narhe",
                            "areaName": "Narhe",
                            "costForTwo": "₹350 for two",
                            "cuisines": [
                                "Maharashtrian",
                                "Chinese",
                                "Thalis",
                                "Pan-Asian"
                            ],
                            "avgRating": 4.4,
                            "veg": true,
                            "parentId": "185966",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "18K+",
                            "promoted": true,
                            "adTrackingId": "cid=32038638~p=25~adgrpid=32038638#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=70611~plpr=COLLECTION~eid=f1d8f72c-32eb-44b7-99c7-087c0ae69a8c~srvts=1755323186052~collid=80475",
                            "sla": {
                                "deliveryTime": 38,
                                "lastMileTravel": 6.3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "35-40 mins",
                                "lastMileTravelString": "6.3 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 23:00:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "50% OFF",
                                "shortDescriptionList": [
                                    {
                                        "meta": "Use TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "50% off up to ₹100 | Use code TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                    "description": "pureveg"
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "2.5K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "32038638"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=70611&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "698313",
                            "name": "Mahabaleshwar Family Restaurant and Bar",
                            "cloudinaryImageId": "72a15e3f41381363825e08944c924644",
                            "locality": "Katraj",
                            "areaName": "Bibwewadi",
                            "costForTwo": "₹600 for two",
                            "cuisines": [
                                "North Indian",
                                "Chinese",
                                "Tandoor",
                                "Biryani",
                                "Seafood"
                            ],
                            "avgRating": 3.9,
                            "parentId": "417486",
                            "avgRatingString": "3.9",
                            "totalRatingsString": "101",
                            "sla": {
                                "deliveryTime": 35,
                                "lastMileTravel": 1.2,
                                "serviceability": "SERVICEABLE",
                                "slaString": "35-40 mins",
                                "lastMileTravelString": "1.2 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-17 00:00:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "android/static-assets/icons/big_rx.png",
                                        "description": "bolt!"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "₹125 OFF",
                                "shortDescriptionList": [
                                    {
                                        "meta": "Use NEWFOODIE",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "Flat ₹125 off | Use NEWFOODIE",
                                        "discountType": "Flat",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textExtendedBadges": {},
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "imageId": "android/static-assets/icons/big_rx.png",
                                                    "description": "bolt!"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "1.2K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=698313&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "211318",
                            "name": "Grand Dilli Darbar",
                            "cloudinaryImageId": "vzzzfrm58hic7gpi9hic",
                            "locality": "Camp",
                            "areaName": "Camp Area",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "Mughlai",
                                "North Indian",
                                "Punjabi"
                            ],
                            "avgRating": 4.3,
                            "parentId": "89738",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "1.3K+",
                            "promoted": true,
                            "adTrackingId": "cid=32038780~p=26~adgrpid=32038780#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=211318~plpr=COLLECTION~eid=62722ac8-d9be-45b7-8ebf-3a3f4ccb4191~srvts=1755323186052~collid=80475",
                            "sla": {
                                "deliveryTime": 50,
                                "lastMileTravel": 8.3,
                                "serviceability": "SERVICEABLE",
                                "slaString": "50-55 mins",
                                "lastMileTravelString": "8.3 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 23:45:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "₹150 OFF",
                                "shortDescriptionList": [
                                    {
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "99 store",
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "99 store",
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.2",
                                    "ratingCount": "3.9K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "32038780"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=211318&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "372614",
                            "name": "Aditya Kitchen",
                            "cloudinaryImageId": "ewd6aaett8pujvvx2nmy",
                            "locality": "Hub Town society road",
                            "areaName": "Undri",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "Maharashtrian"
                            ],
                            "avgRating": 4.6,
                            "parentId": "27235",
                            "avgRatingString": "4.6",
                            "totalRatingsString": "106",
                            "sla": {
                                "deliveryTime": 52,
                                "lastMileTravel": 2,
                                "serviceability": "SERVICEABLE",
                                "slaString": "50-55 mins",
                                "lastMileTravelString": "2.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 22:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "10% OFF",
                                "shortDescriptionList": [
                                    {
                                        "meta": "Use TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=372614&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "853253",
                            "name": "Shahji's Parantha House",
                            "cloudinaryImageId": "aba45375462798eb6c7727b639f893db",
                            "locality": "Ganga Dham",
                            "areaName": "Kondhwa",
                            "costForTwo": "₹500 for two",
                            "cuisines": [
                                "North Indian"
                            ],
                            "avgRating": 4.3,
                            "veg": true,
                            "parentId": "180886",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "374",
                            "promoted": true,
                            "adTrackingId": "cid=32039229~p=27~adgrpid=32039229#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=853253~plpr=COLLECTION~eid=e07146f7-484f-4aa9-b874-37206b6df0f3~srvts=1755323186052~collid=80475",
                            "sla": {
                                "deliveryTime": 40,
                                "lastMileTravel": 3.8,
                                "serviceability": "SERVICEABLE",
                                "slaString": "40-45 mins",
                                "lastMileTravelString": "3.8 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 23:59:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "10% OFF",
                                "shortDescriptionList": [
                                    {
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "99 store",
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "Free delivery",
                                        "discountType": "FREE_DELIVERY",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "imageBased": {},
                                    "textExtendedBadges": {},
                                    "textBased": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "32039229"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=853253&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "423146",
                            "name": "Hotel Tushar",
                            "cloudinaryImageId": "ftvwc8jof0t6m9mznlgc",
                            "locality": "Mulshi",
                            "areaName": "Undri",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "North Indian",
                                "Chinese",
                                "Malwani",
                                "Thalis"
                            ],
                            "avgRating": 4.4,
                            "parentId": "235363",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "127",
                            "sla": {
                                "deliveryTime": 27,
                                "lastMileTravel": 1.8,
                                "serviceability": "SERVICEABLE",
                                "slaString": "25-30 mins",
                                "lastMileTravelString": "1.8 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 16:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "20% OFF",
                                "shortDescriptionList": [
                                    {
                                        "meta": "Use TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "20% off up to ₹50 | Use code TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.5",
                                    "ratingCount": "370"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=423146&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "263873",
                            "name": "Shravan Specials by Lunchbox",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/11/3917ffbf-d736-4d4f-b095-173263ef7078_263873.JPG",
                            "locality": "Datta nagar chowk",
                            "areaName": "AVDHOOT HIGHTS",
                            "costForTwo": "₹200 for two",
                            "cuisines": [
                                "Biryani",
                                "North Indian",
                                "Desserts",
                                "Beverages"
                            ],
                            "avgRating": 4.3,
                            "veg": true,
                            "parentId": "21938",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "177",
                            "promoted": true,
                            "adTrackingId": "cid=31990472~p=31~adgrpid=31990472#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=263873~plpr=COLLECTION~eid=07a96074-1380-4e58-9f2b-b00a877dcef3~srvts=1755323186052~collid=80475",
                            "sla": {
                                "deliveryTime": 40,
                                "lastMileTravel": 4.4,
                                "serviceability": "SERVICEABLE",
                                "slaString": "35-40 mins",
                                "lastMileTravelString": "4.4 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 23:59:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "₹125 OFF",
                                "shortDescriptionList": [
                                    {
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "99 store",
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "Free delivery",
                                        "discountType": "FREE_DELIVERY",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "description": "pureveg",
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                                }
                                            }
                                        ]
                                    },
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "31990472"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=263873&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "721881",
                            "name": "The Non Veg Culture",
                            "cloudinaryImageId": "2007e7da2faa62664189832a9edea8f5",
                            "locality": "Shivraj Nagar",
                            "areaName": "Bibwewadi",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "North Indian",
                                "Chinese",
                                "Biryani"
                            ],
                            "avgRating": 2.7,
                            "parentId": "429907",
                            "avgRatingString": "2.7",
                            "totalRatingsString": "5",
                            "sla": {
                                "deliveryTime": 29,
                                "lastMileTravel": 1.4,
                                "serviceability": "SERVICEABLE",
                                "slaString": "25-30 mins",
                                "lastMileTravelString": "1.4 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 23:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "60% OFF",
                                "shortDescriptionList": [
                                    {
                                        "meta": "Free Delivery",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "60% off on all orders",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "Free delivery",
                                        "discountType": "FREE_DELIVERY",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=721881&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "51600",
                            "name": "Krishnai Veg Non Veg Restaurant",
                            "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/23/18508f32-6b39-465b-9605-55c07d241dc2_51600.jpg",
                            "locality": "Anand Nagar",
                            "areaName": "NIBM",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "Chinese",
                                "Biryani",
                                "Kebabs"
                            ],
                            "avgRating": 4.5,
                            "parentId": "121041",
                            "avgRatingString": "4.5",
                            "totalRatingsString": "9.5K+",
                            "promoted": true,
                            "adTrackingId": "cid=31632350~p=34~adgrpid=31632350#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=51600~plpr=COLLECTION~eid=44e1c490-57a7-4de3-88dc-019b746cfd3f~srvts=1755323186052~collid=80475",
                            "sla": {
                                "deliveryTime": 45,
                                "lastMileTravel": 7,
                                "serviceability": "SERVICEABLE",
                                "slaString": "40-45 mins",
                                "lastMileTravelString": "7.0 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 16:30:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "₹100 OFF",
                                "shortDescriptionList": [
                                    {
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "99 store",
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "99 store",
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "3.8",
                                    "ratingCount": "454"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "31632350"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=51600&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "721972",
                            "name": "Arab Zaika",
                            "cloudinaryImageId": "cf0ef6cff803db3b621931fc867ebd9d",
                            "locality": "Indira Nagar",
                            "areaName": "Bibwewadi",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "North Indian",
                                "Chinese",
                                "Biryani",
                                "Punjabi"
                            ],
                            "avgRating": 2.9,
                            "parentId": "261941",
                            "avgRatingString": "2.9",
                            "totalRatingsString": "17",
                            "sla": {
                                "deliveryTime": 28,
                                "lastMileTravel": 1.4,
                                "serviceability": "SERVICEABLE",
                                "slaString": "25-30 mins",
                                "lastMileTravelString": "1.4 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 23:15:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "60% OFF",
                                "shortDescriptionList": [
                                    {
                                        "meta": "Free Delivery",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "60% off on all orders",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "Free delivery",
                                        "discountType": "FREE_DELIVERY",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "--"
                                }
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=721972&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "147724",
                            "name": "Vedant Pure Veg",
                            "cloudinaryImageId": "wlxyg6ohlb0kl76hf5bj",
                            "locality": "Katraj",
                            "areaName": "Katraj",
                            "costForTwo": "₹400 for two",
                            "cuisines": [
                                "North Indian",
                                "Chinese"
                            ],
                            "avgRating": 4.4,
                            "parentId": "221776",
                            "avgRatingString": "4.4",
                            "totalRatingsString": "6.6K+",
                            "promoted": true,
                            "adTrackingId": "cid=32038747~p=36~adgrpid=32038747#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=147724~plpr=COLLECTION~eid=55219605-d368-4d36-9479-6c04f9faf857~srvts=1755323186052~collid=80475",
                            "sla": {
                                "deliveryTime": 37,
                                "lastMileTravel": 4.9,
                                "serviceability": "SERVICEABLE",
                                "slaString": "35-40 mins",
                                "lastMileTravelString": "4.9 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 23:30:00",
                                "opened": true
                            },
                            "badges": {
                                "imageBadges": [
                                    {
                                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                                        "description": "pureveg"
                                    }
                                ]
                            },
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "₹75 OFF",
                                "shortDescriptionList": [
                                    {
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "99 store",
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    },
                                    {
                                        "meta": "99 store",
                                        "discountType": "FinalPrice",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textExtendedBadges": {},
                                    "textBased": {},
                                    "imageBased": {
                                        "badgeObject": [
                                            {
                                                "attributes": {
                                                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                                                    "description": "pureveg"
                                                }
                                            }
                                        ]
                                    }
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.1",
                                    "ratingCount": "5.1K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
                            "campaignId": "32038747"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=147724&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            },
            {
                "card": {
                    "card": {
                        "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
                        "info": {
                            "id": "489915",
                            "name": "Swami Veg and Snacks Center",
                            "cloudinaryImageId": "bptwzqd5yxexsgz1khwq",
                            "locality": "Katraj",
                            "areaName": "Katraj",
                            "costForTwo": "₹300 for two",
                            "cuisines": [
                                "Chinese",
                                "Fast Food",
                                "Street Food"
                            ],
                            "avgRating": 4.3,
                            "veg": true,
                            "parentId": "294311",
                            "avgRatingString": "4.3",
                            "totalRatingsString": "12",
                            "sla": {
                                "deliveryTime": 26,
                                "lastMileTravel": 1.8,
                                "serviceability": "SERVICEABLE",
                                "slaString": "25-30 mins",
                                "lastMileTravelString": "1.8 km",
                                "iconType": "ICON_TYPE_EMPTY"
                            },
                            "availability": {
                                "nextCloseTime": "2025-08-16 16:00:00",
                                "opened": true
                            },
                            "badges": {},
                            "isOpen": true,
                            "aggregatedDiscountInfoV2": {
                                "header": "10% OFF",
                                "shortDescriptionList": [
                                    {
                                        "meta": "Use TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ],
                                "descriptionList": [
                                    {
                                        "meta": "10% off up to ₹40 | Use code TRYNEW",
                                        "discountType": "Percentage",
                                        "operationType": "RESTAURANT"
                                    }
                                ]
                            },
                            "type": "F",
                            "badgesV2": {
                                "entityBadges": {
                                    "textBased": {},
                                    "imageBased": {},
                                    "textExtendedBadges": {}
                                }
                            },
                            "orderabilityCommunication": {
                                "title": {},
                                "subTitle": {},
                                "message": {},
                                "customIcon": {},
                                "commsStyling": {}
                            },
                            "differentiatedUi": {
                                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                                "differentiatedUiMediaDetails": {
                                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                                    "lottie": {},
                                    "video": {}
                                }
                            },
                            "reviewsSummary": {},
                            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                            "restaurantOfferPresentationInfo": {},
                            "externalRatings": {
                                "aggregatedRating": {
                                    "rating": "4.0",
                                    "ratingCount": "1.2K+"
                                },
                                "source": "GOOGLE",
                                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
                            },
                            "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
                        },
                        "analytics": {},
                        "cta": {
                            "link": "swiggy://menu?restaurant_id=489915&source=collection&query=Paratha",
                            "text": "RESTAURANT_MENU",
                            "type": "DEEPLINK"
                        },
                        "widgetId": "collectionV5RestaurantListWidget"
                    }
                }
            }
        ]


// not using keys(not acceptable) <<index as key << unique id(best practice);


const AppLayout = () =>{
    return (<div className="app">
       <Header/>
       <Body/>
    </div>);
};


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);





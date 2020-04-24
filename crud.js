show dbs
use admin
db.createCollection(
    IT_Company,
    {
        capped : TRUE,
        autoIndexID : TRUE,
        max : 100,
    }
)

db.IT_company.insertMany(
////////////////////////////////////////////////////////////////////////////////////////////////////
{
    name : 'Ultimate Software',
    website : 'https://www.ultimatesoftware.com/',
    people :
    {
        founder : 'Scott Scherr',
        CEO : 'Aron Ain',
        Chief_Sales_Officer : 'Jonathan Benhamou',
        Chief_Services_Officer : 'Joanne Degnan',
        CFO : 'Patrick Depuis',
        Chief_Relations_Officer : 'Bill Hicks',
        CMO : 'Jody Kaminsky',
        CTO : 'John Machado',
        CHRO : 'Annmarie Neal',
        Chief_Revenue_Officer : 'Greg Swick',
        President : 'Chris Todd',
        Chief_Transformation_Officer : 'Rod Witmond',
        Chief_Security_Officer : 'Michael Wright'
    },
    HQ :
    [
        {
            street_no : 2000,
            street : 'Ultimate Way',
            city : 'Weston',
            state : 'FLorida',
            zip_code : 33326,
            country : 'United States of America',
            phone: '1-800-432-1729'
        },
        {
            street_no : 144,
            street : 'Bloor St. West',
            apt_no : 'Suite 400',
            city : 'Toronto',
            province : 'Ontario',
            zip_code : 'M5S 1M4',
            country : 'Canada',
            phone : '1-800-432-1729'
        }
    ],
    statistics :
    {
        number_of_employees : 6000,
        revenue : 940.1, //millions USD
    },
    connect :
    {
        email : ['ultiproinfo@ultimatesoftware.com', 'privacy@ultimatesoftware.com'],
        media :
        {
            Twitter : 'twitter.com/UltimateHCM',
            Facebook : 'facebook.com/UltimateSoftware',
            LinkedIn : 'linkedin.com/company/Ultimate-Software'
        }
    },
    rankings :
    {
        Forbes :
        {
            2019 :
            {
                Best_Workplaces_in_Technology : 1,
                Best_Companies_to_Work_for : 8
            },
            2020 :
            {
                Best_Companies_to_Work_for : 2
            }
        }
    },
    motto : "People First",
    year_founded : 1990,
    industry : ['SaaS', 'HR', 'Software'],
    products : ['UltiPro', 'PeopleDoc', 'Perception']
},
////////////////////////////////////////////////////////////////////////////////////////////////////

{
    name : 'Atlassian',
    website : 'https://www.atlassian.com/',
    people :
    {
        founder : ['Mike Cannon-Brookes', 'Scott Farquar'],
        CEO : ['Mike Cannon-Brookes', 'Scott Farquar'],
        CFO : 'James Beer',
        General_Counsel : 'Erika Fisher',
        President : 'Jay Simons',
        CTO : 'Sri Viswanath'
    },
    HQ :
    {
        street_no : 350,
        street : 'Bush St.',
        floor : 13,
        city : 'San Francisco',
        state : 'California',
        zip_code : 94104,
        country : 'United States of America'
    },
    statistics :
    {
        number_of_employees : 3616,
        stock_price : 149.39,
        revenue : 1210, //millions USD
    },
    connect :
    {
        media :
        {
            Facebook : 'https://www.facebook.com/Atlassian',
            Twitter : 'https://twitter.com/atlassian',
            LinkedIn : 'https://www.linkedin.com/company/atlassian',
            YouTube : 'https://www.youtube.com/user/GoAtlassian'
        }
    },
    year_founded : 2002,
    industry : ['SWE Tools', 'Software'],
    products :
    [
        'Jira Align', 'Jira Core', 'Opsgenie', 'Statuspage', 'Confluence', 'Trello', 'Bitbucket',
        'Sourcetree', 'Bamboo', 'Atlassian Access', 'Crowd'
    ]
},
////////////////////////////////////////////////////////////////////////////////////////////////////
{
    name : 'Tesla',
    website : 'Search Results',
    people :
    {
        founder : ['Elon Musk', 'JB Straubel', 'Martin Eberhard', 'Marc Tarpenning', 'Ian Wright'],
        CEO : 'Elon Musk',

    },
    statistics :
    {
        number_of_employees : 48016,
        stock_price : 705.63,
        revenue : 24570 //millions USD
    },
    HQ :
    {
        street_no : 3500,
        street : 'Deer Creek Rd.',
        city : 'Palo Alto',
        state : 'California',
        zip_code : 94304,
    },
    connect :
    {
        phone : '1-888-518-3752',

    },
    year_founded : 2003,
    industry : ['Automobile', 'Truck', 'EV', 'Solar Energy'],
    products : ['Model 3', 'Model Y', 'Cybertruck', 'Model S', 'Model X']
} 
////////////////////////////////////////////////////////////////////////////////////////////////////

)
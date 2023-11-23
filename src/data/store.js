import { reactive } from "vue";

export const store = reactive({
    trigger:false,
    companyInfo: {
        openHours: {
            text: 'Mon-Sat-9:00-18:00',
            icon: 'fa-solid fa-clock'
        },
        phoneContact: {
            text: '+1 (305) 1234-5678',
            icon: 'fa-solid fa-phone'
        },
        mailContact: {
            text: 'hello@exemple.com',
            icon: 'fa-solid fa-envelope'
        },
        position: {
            text: 'Main Evenue, 987',
            icon: 'fa-solid fa-location-dot'
        },
        social: [
            'fa-brands fa-facebook-f', 'fa-brands fa-twitter', 'fa-brands fa-linkedin-in'
        ]
    },
    imgUrl: '/Images/imgs/',
    svgUrl: '/Images/svgs/',
    sectionList: {
        home: {
            id: 'home',
            name: 'home',
            details: {
                one: {
                    title: 'We Share',
                    specialTitle: 'Good Ideas',
                    paragraph: 'Escape the comfort zone and achieve better results with the help of experts who understand the subject',
                    description: '',
                    green: true,
                    button: 'get in touch',
                    row: false,
                    centerButton:false
                },
                two: {
                    title: 'Ready',
                    specialTitle: 'Team',
                    paragraph: 'No metter what your company needs, we will be ready to assist you in the best possible way.',
                    description: '',
                    green: true,
                    button: 'get in touch',
                    row: false,
                    centerButton:true
                },
                three: {
                    title: 'Talk to a',
                    specialTitle: 'Consultant',
                    paragraph: 'Do not miss the opportunity to achieve better results and solidity in the market.',
                    description: '',
                    green: true,
                    button: 'get in touch',
                    row: false,
                    centerButton:false
                }

            }
        },
        services: {
            id: 'services',
            name: 'services',
            details: {
                title: 'Excellence in',
                specialTitle: 'Services',
                paragraph: 'We are leaders in providing consultancy services with a set of cutting-edge technologies and a team of experienced and renowned professionals. These are some options thet you can hire.',
                description: 'our business areas',
                green: true,
                button: 'see all',
                row: true,
                centerButton:false
            }
        },
        about: {
            id: 'about',
            name: 'about',
            details: {
                title: 'The',
                specialTitle: 'Company',
                paragraph: 'For 12 years we have been providing audit and warranty, financial advice, risk advice, taxes and related services to select clients',
                description: 'about the network',
                green: false,
                button: null,
                row: false,
                centerButton:false
            }
        },
        projects: {
            id: 'projects',
            name: 'projects',
            details: {
                title: 'Actions &',
                specialTitle: 'Projects',
                paragraph: '',
                description: 'we do more for anyone',
                green: true,
                button: null,
                row: false,
                centerButton:false
            }
        },
        results: {
            id: 'results',
            name: 'results',
            details: {
                title: 'Results in',
                specialTitle: 'Number',
                paragraph: 'Our goal is to exceed expectations by delivering the best job possible.',
                description: 'what are we doing',
                green: false,
                button: null,
                row: false,
                centerButton:false
            }
        },
        getInTouch: {
            id: 'get-in-touch',
            name: 'get in touch',
            details: {
                title: 'Get in',
                specialTitle: 'Touch',
                paragraph: 'We will respond to your message as soon as possible.',
                description: 'send a message',
                green: true,
                button: null,
                row: false,
                centerButton:false
            }
        }
    },
    infoCards: [
        {
            title: "Audit & Assurance",
            paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veniam dolorum quam aut enim consectetur assumenda laborum facilis repellendus nobis.",
            icon: 'svg-1.svg'
        },
        {
            title: "Financial Advisor",
            paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veniam dolorum quam aut enim consectetur assumenda laborum facilis repellendus nobis.",
            icon: 'svg-2.svg'
        },
        {
            title: "Analytics and M&A",
            paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veniam dolorum quam aut enim consectetur assumenda laborum facilis repellendus nobis.",
            icon: 'svg-3.svg'
        },
        {
            title: "Middle Marketing",
            paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veniam dolorum quam aut enim consectetur assumenda laborum facilis repellendus nobis.",
            icon: 'svg-4.svg'
        },
        {
            title: "Legal Consulting",
            paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veniam dolorum quam aut enim consectetur assumenda laborum facilis repellendus nobis.",
            icon: 'svg-5.svg'
        },
        {
            title: "Regulatory Risk",
            paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veniam dolorum quam aut enim consectetur assumenda laborum facilis repellendus nobis.",
            icon: 'svg-6.svg'
        },
    ],
    companyCert: [
        {
            title: 'Tradition',
            paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veniam dolorum quam aut enim consectetur assumenda laborum facilis repellendus nobis.',
            icon: 'fa-solid fa-hourglass-end'
        },
        {
            title: 'Security',
            paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veniam dolorum quam aut enim consectetur assumenda laborum facilis repellendus nobis.',
            icon: 'fa-solid fa-lock'
        },
        {
            title: 'Certificate',
            paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veniam dolorum quam aut enim consectetur assumenda laborum facilis repellendus nobis.',
            icon: 'fa-solid fa-apple-whole'
        },
        {
            title: 'Expertise',
            paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos veniam dolorum quam aut enim consectetur assumenda laborum facilis repellendus nobis.',
            icon: 'fa-solid fa-user-tie'
        },
    ],
    navList: ['all', 'institutional', 'social', 'events', 'innovation', 'environment', 'technology'],
    imgCards: [
        {
            title: "Academic professional program in social media",
            img: 'project-1.jpg',
            paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            title: "President's speech at the annual meeting",
            img: 'project-2.jpg',
            paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            title: "International business trip in Shanghai",
            img: 'project-3.jpg',
            paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            title: "Technology workshop with education theme",
            img: 'project-4.jpg',
            paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            title: "Donation of clothes and food to the partner NGO",
            img: 'project-5.jpg',
            paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
        {
            title: "Confraternization of the procurement team",
            img: 'project-6.jpg',
            paragraph: "Lorem ipsum dolor sit amet consectetur, adipisicing elit."
        },
    ],
    results: [
        {
            name: 'Certifications',
            value: 128
        },
        {
            name: 'Employees',
            value: 230
        },
        {
            name: 'Costumers',
            value: 517
        },
        {
            name: 'Countries Served',
            value: 94
        },
    ],
    partnersList: ['logo-1.png', 'logo-2.png', 'logo-3.png', 'logo-4.png', 'logo-5.png'],
    footerCards: [
        {
            title: 'About',
            items: ['The Company', 'Istitutional', 'Social & Events', 'Innovation', 'Environment', 'Technology']
        },
        {
            title: 'Services',
            items: ['Audit & Assurance', 'Financial Advisory', 'Analytics M&A', 'Middle Marketing', 'Legal Consulting', 'Regulatory Risk']
        },
        {
            title: 'Support',
            items: ['Responsability', 'Terms of Use', 'About Cookies', 'Privacy Policy', 'Accessibility', 'Information']
        }
    ],


});
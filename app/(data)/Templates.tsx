export default [
    {
        name: 'Blog-Title',
        desc: 'An AI tool that generate blog title depends on your blog information',
        category: 'Blog',
        icon: 'https://cdn-icons-png.flaticon.com/128/4735/4735824.png',
        aiPrompt: 'Give me 5 blog topic idea in bullet wise only based on give niche & outline topic and give me result in Rich text editor format',
        slug: 'generate-blog-title',
        form: [
            {
                label: 'Enter your blog niche',
                field: 'input',
                name: 'niche',
                required: true
            },
            {
                label: 'Enter blog outline',
                field: 'textarea',
                name: 'outline',
            }
        ]
    },
    {
        name: 'Social Media Post',
        desc: 'An AI tool that creates compelling social media posts with relevant hashtags.',
        category: 'Social Media',
        icon: 'https://cdn-icons-png.flaticon.com/128/9963/9963032.png',
        aiPrompt: 'Generate a creative social media post (under 280 characters) with 3-5 relevant hashtags for the given topic and tone.',
        slug: 'social-media-post-generator',
        form: [
            {
                label: 'Topic of the post',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Desired tone (e.g., funny, professional, serious)',
                field: 'input',
                name: 'tone',
                required: true
            },
        ]
    },
    {
        name: 'Product Description',
        desc: 'An AI tool that writes short and engaging product descriptions for e-commerce.',
        category: 'E-Commerce',
        icon: 'https://cdn-icons-png.flaticon.com/128/10702/10702651.png',
        aiPrompt: 'Create a concise, SEO-friendly product description in a maximum of 3 sentences based on the product name and key features provided.',
        slug: 'product-description-writer',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'product_name',
                required: true
            },
            {
                label: 'Key Features',
                field: 'textarea',
                name: 'features',
                required: true
            }
        ]
    },
    {
        name: 'Email Subject Line',
        desc: 'An AI tool that generates catchy email subject lines to increase open rates.',
        category: 'Email Marketing',
        icon: 'https://cdn-icons-png.flaticon.com/128/9213/9213615.png',
        aiPrompt: 'Generate 5 creative and engaging email subject lines for the following email topic.',
        slug: 'email-subject-line-generator',
        form: [
            {
                label: 'Email Topic',
                field: 'textarea',
                name: 'email_topic',
                required: true
            },
        ]
    },
    {
        name: 'SEO Meta Description',
        desc: 'An AI tool that creates effective meta descriptions for better search engine ranking.',
        category: 'SEO',
        icon: 'https://cdn-icons-png.flaticon.com/128/9966/9966774.png',
        aiPrompt: 'Write a concise, keyword-rich SEO meta description (under 160 characters) for the given page title and content summary.',
        slug: 'seo-meta-description',
        form: [
            {
                label: 'Page Title',
                field: 'input',
                name: 'page_title',
                required: true
            },
            {
                label: 'Content Summary',
                field: 'textarea',
                name: 'content_summary',
                required: true
            }
        ]
    },
    {
        name: 'Story Plot Generator',
        desc: 'An AI tool that generates a compelling plot summary for a story based on genre and key elements.',
        category: 'Creative Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2921/2921789.png',
        aiPrompt: 'Generate a short story plot summary (in 3-4 sentences) for the specified genre, protagonist, and main conflict.',
        slug: 'story-plot-generator',
        form: [
            {
                label: 'Genre (e.g., Fantasy, Sci-Fi, Romance)',
                field: 'input',
                name: 'genre',
                required: true
            },
            {
                label: 'Protagonist Description',
                field: 'textarea',
                name: 'protagonist',
                required: true
            },
            {
                label: 'Main Conflict',
                field: 'textarea',
                name: 'conflict',
                required: true
            },
        ]
    },
    {
        name: 'Poem Writer',
        desc: 'An AI tool that writes a short, original poem based on a specific theme and mood.',
        category: 'Creative Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/626/626569.png',
        aiPrompt: 'Write a short poem of exactly 4 stanzas, with each stanza having 4 lines, based on the given theme and mood.',
        slug: 'poem-writer',
        form: [
            {
                label: 'Theme (e.g., Nature, Love, Space)',
                field: 'input',
                name: 'theme',
                required: true
            },
            {
                label: 'Mood (e.g., Joyful, Melancholy, Mysterious)',
                field: 'input',
                name: 'mood',
                required: true
            },
        ]
    },
    {
        name: 'Character Bio Creator',
        desc: 'An AI tool that creates a detailed character biography from a few basic traits.',
        category: 'Creative Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/2916/2916053.png',
        aiPrompt: 'Generate a detailed character biography including their name, age, personality, and a short backstory, based on the provided traits.',
        slug: 'character-bio-creator',
        form: [
            {
                label: 'Character Name',
                field: 'input',
                name: 'name',
                required: true
            },
            {
                label: 'Key Traits (e.g., brave, mysterious, clumsy)',
                field: 'textarea',
                name: 'traits',
                required: true
            },
        ]
    },
    {
        name: 'Dialogue Writer',
        desc: 'An AI tool that writes a snippet of dialogue for a scene.',
        category: 'Creative Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/500/500412.png',
        aiPrompt: 'Write a 10-line dialogue exchange between two characters based on their relationship and the purpose of the scene.',
        slug: 'dialogue-writer',
        form: [
            {
                label: 'Character 1 & 2 Relationship',
                field: 'input',
                name: 'relationship',
                required: true
            },
            {
                label: 'Scene Purpose (e.g., a secret is revealed, a conflict is started)',
                field: 'textarea',
                name: 'purpose',
                required: true
            },
        ]
    },
    {
        name: 'Song Lyric Generator',
        desc: 'An AI tool that creates song lyrics based on a topic and genre.',
        category: 'Creative Writing',
        icon: 'https://cdn-icons-png.flaticon.com/128/833/833472.png',
        aiPrompt: 'Generate two verses and a chorus for a song based on the topic and musical genre.',
        slug: 'song-lyric-generator',
        form: [
            {
                label: 'Song Topic',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Musical Genre (e.g., Pop, Country, Rock)',
                field: 'input',
                name: 'genre',
                required: true
            },
        ]
    },
    {
        name: 'Brand Slogan Generator',
        desc: 'An AI tool that creates a catchy slogan for a new brand or company.',
        category: 'Marketing & Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/2281/2281861.png',
        aiPrompt: 'Generate 5 unique brand slogan ideas based on the company name, product/service, and target audience.',
        slug: 'brand-slogan-generator',
        form: [
            {
                label: 'Company Name',
                field: 'input',
                name: 'company_name',
                required: true
            },
            {
                label: 'Product or Service',
                field: 'input',
                name: 'product_service',
                required: true
            },
            {
                label: 'Target Audience',
                field: 'textarea',
                name: 'audience',
                required: true
            },
        ]
    },
    {
        name: 'Newsletter Headline',
        desc: 'An AI tool that generates engaging headlines for email newsletters.',
        category: 'Marketing & Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/489/489674.png',
        aiPrompt: 'Generate 5 creative newsletter headlines for the given main topic and key points of the newsletter.',
        slug: 'newsletter-headline-generator',
        form: [
            {
                label: 'Main Topic of Newsletter',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'Key Points',
                field: 'textarea',
                name: 'points',
                required: true
            },
        ]
    },
    {
        name: 'Press Release Draft',
        desc: 'An AI tool that drafts a basic press release from key information.',
        category: 'Marketing & Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/3426/3426544.png',
        aiPrompt: 'Draft a simple press release (3 paragraphs) announcing the new product launch, including the product name, key features, and a quote from the CEO.',
        slug: 'press-release-draft',
        form: [
            {
                label: 'Product Name',
                field: 'input',
                name: 'product_name',
                required: true
            },
            {
                label: 'Key Features to Highlight',
                field: 'textarea',
                name: 'features',
                required: true
            },
            {
                label: 'CEO Quote',
                field: 'textarea',
                name: 'quote',
                required: true
            }
        ]
    },
    {
        name: 'Elevator Pitch Creator',
        desc: 'An AI tool that helps you craft a concise and compelling elevator pitch.',
        category: 'Marketing & Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/3739/3739779.png',
        aiPrompt: 'Generate a concise, 30-second elevator pitch based on the company, product/service, and problem it solves.',
        slug: 'elevator-pitch-creator',
        form: [
            {
                label: 'Company Name',
                field: 'input',
                name: 'company_name',
                required: true
            },
            {
                label: 'Product/Service',
                field: 'input',
                name: 'product_service',
                required: true
            },
            {
                label: 'Problem it Solves',
                field: 'textarea',
                name: 'problem',
                required: true
            }
        ]
    },
    {
        name: 'Unique Selling Proposition (USP) Builder',
        desc: 'An AI tool that helps define a brand\'s unique selling proposition.',
        category: 'Marketing & Branding',
        icon: 'https://cdn-icons-png.flaticon.com/128/2281/2281861.png',
        aiPrompt: 'Based on the provided information, generate 3 unique selling propositions (USPs) for the company and product.',
        slug: 'usp-builder',
        form: [
            {
                label: 'Target Customer',
                field: 'input',
                name: 'customer',
                required: true
            },
            {
                label: 'Product/Service Category',
                field: 'input',
                name: 'category',
                required: true
            },
            {
                label: 'Key Differentiators',
                field: 'textarea',
                name: 'differentiators',
                required: true
            }
        ]
    },
    {
        name: 'Study Guide Creator',
        desc: 'An AI tool that generates a study guide from a topic and key points.',
        category: 'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/10411/10411787.png',
        aiPrompt: 'Create a structured study guide with a summary, key terms, and 5 potential exam questions based on the provided topic and key concepts.',
        slug: 'study-guide-creator',
        form: [
            {
                label: 'Subject/Topic',
                field: 'input',
                name: 'subject',
                required: true
            },
            {
                label: 'Key Concepts to include',
                field: 'textarea',
                name: 'concepts',
                required: true
            }
        ]
    },
    {
        name: 'Flashcard Generator',
        desc: 'An AI tool that creates flashcards from a list of terms and definitions.',
        category: 'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/601/601977.png',
        aiPrompt: 'Generate 5 flashcards, each with a term on one side and its corresponding definition on the other, based on the provided topic.',
        slug: 'flashcard-generator',
        form: [
            {
                label: 'Topic for Flashcards',
                field: 'input',
                name: 'topic',
                required: true
            },
            {
                label: 'List of terms/concepts',
                field: 'textarea',
                name: 'terms',
                required: true
            }
        ]
    },
    {
        name: 'Essay Outline Generator',
        desc: 'An AI tool that builds a detailed outline for an essay from a thesis statement.',
        category: 'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/6831/6831086.png',
        aiPrompt: 'Generate a detailed essay outline (introduction, 3 body paragraphs, and conclusion) based on the provided thesis statement and topic.',
        slug: 'essay-outline-generator',
        form: [
            {
                label: 'Thesis Statement',
                field: 'textarea',
                name: 'thesis',
                required: true
            },
            {
                label: 'Essay Topic',
                field: 'input',
                name: 'topic',
                required: true
            }
        ]
    },
    {
        name: 'Quiz Question Generator',
        desc: 'An AI tool that creates multiple-choice questions from a block of text.',
        category: 'Education',
        icon: 'https://cdn-icons-png.flaticon.com/128/2916/2916120.png',
        aiPrompt: 'Generate 3 multiple-choice quiz questions with 4 options each (and an answer key) from the provided text.',
        slug: 'quiz-question-generator',
        form: [
            {
                label: 'Source Text',
                field: 'textarea',
                name: 'text',
                required: true
            }
        ]
    },
    {
        name: 'Meeting Agenda Creator',
        desc: 'An AI tool that generates a structured meeting agenda.',
        category: 'Productivity',
        icon: 'https://cdn-icons-png.flaticon.com/128/6007/6007775.png',
        aiPrompt: 'Generate a professional meeting agenda with a clear title, purpose, list of discussion topics with time allocations, and next steps.',
        slug: 'meeting-agenda-creator',
        form: [
            {
                label: 'Meeting Purpose',
                field: 'input',
                name: 'purpose',
                required: true
            },
            {
                label: 'Discussion Topics (comma-separated)',
                field: 'textarea',
                name: 'topics',
                required: true
            },
        ]
    },
    {
        name: 'To-Do List Organizer',
        desc: 'An AI tool that organizes a list of tasks by priority.',
        category: 'Productivity',
        icon: 'https://cdn-icons-png.flaticon.com/128/3453/3453041.png',
        aiPrompt: 'Organize the given to-do list by priority (High, Medium, Low) and add a short explanation for each task\'s priority level.',
        slug: 'todo-list-organizer',
        form: [
            {
                label: 'To-Do List (one item per line)',
                field: 'textarea',
                name: 'tasks',
                required: true
            }
        ]
    },
    {
        name: 'Recipe Idea Generator',
        desc: 'An AI tool that suggests recipe ideas based on available ingredients.',
        category: 'Lifestyle',
        icon: 'https://cdn-icons-png.flaticon.com/128/12588/12588764.png',
        aiPrompt: 'Suggest 3 creative recipe ideas that can be made using the provided ingredients, specifying the cuisine type and a brief description for each.',
        slug: 'recipe-idea-generator',
        form: [
            {
                label: 'List of Ingredients (comma-separated)',
                field: 'textarea',
                name: 'ingredients',
                required: true
            },
            {
                label: 'Cuisine Preference (Optional)',
                field: 'input',
                name: 'cuisine',
            }
        ]
    },
    {
        name: 'Travel Itinerary Planner',
        desc: 'An AI tool that creates a travel itinerary for a city based on interests and duration.',
        category: 'Lifestyle',
        icon: 'https://cdn-icons-png.flaticon.com/128/1039/1039868.png',
        aiPrompt: 'Generate a 3-day travel itinerary for a trip to the specified city, including activities, popular sights, and dining suggestions, based on the user\'s interests.',
        slug: 'travel-itinerary-planner',
        form: [
            {
                label: 'Destination City',
                field: 'input',
                name: 'city',
                required: true
            },
            {
                label: 'Interests (e.g., history, food, adventure, art)',
                field: 'textarea',
                name: 'interests',
                required: true
            }
        ]
    },
    {
        name: 'Workout Plan Creator',
        desc: 'An AI tool that generates a workout routine based on fitness goals and available equipment.',
        category: 'Lifestyle',
        icon: 'https://cdn-icons-png.flaticon.com/128/2967/2967923.png',
        aiPrompt: 'Generate a simple 3-day workout plan with exercises, sets, and reps based on the user\'s fitness goals and available equipment.',
        slug: 'workout-plan-creator',
        form: [
            {
                label: 'Fitness Goal (e.g., strength, weight loss, endurance)',
                field: 'input',
                name: 'goal',
                required: true
            },
            {
                label: 'Available Equipment (e.g., dumbbells, resistance bands)',
                field: 'textarea',
                name: 'equipment',
                required: true
            }
        ]
    },
    {
        name: 'Gift Idea Generator',
        desc: 'An AI tool that suggests personalized gift ideas.',
        category: 'Lifestyle',
        icon: 'https://cdn-icons-png.flaticon.com/128/3476/3476311.png',
        aiPrompt: 'Generate 5 personalized gift ideas for a person based on their age, relationship to you, and hobbies/interests.',
        slug: 'gift-idea-generator',
        form: [
            {
                label: 'Recipient\'s Age',
                field: 'input',
                name: 'age',
                required: true
            },
            {
                label: 'Relationship to Recipient (e.g., friend, family, coworker)',
                field: 'input',
                name: 'relationship',
                required: true
            },
            {
                label: 'Hobbies/Interests',
                field: 'textarea',
                name: 'hobbies',
                required: true
            }
        ]
    }
]
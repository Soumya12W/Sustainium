<script lang="ts">
    import feature1 from '$lib/assets/product/Charts.png';
    import feature2 from '$lib/assets/product/Action3.png';
    import feature3 from '$lib/assets/product/boavizta.png';
    import feature4 from '$lib/assets/product/deprtment.png';
    import feature5 from '$lib/assets/product/epa.png';
    import feature6 from '$lib/assets/product/greenhouse.png';
    // import feature7 from '$lib/assets/product/managedcarbon7.png';
    import feature8 from '$lib/assets/product/security5.png';
    import usability from '$lib/assets/product/usability.png';
    import coverage from '$lib/assets/product/coverage.png';
    import reporting from '$lib/assets/product/reporting.png';
    import audit from '$lib/assets/product/audit.png';
    import shape2 from '$lib/assets/product/shape2.png';
    import shape1 from '$lib/assets/product/shape1.png';
    import main1 from '$lib/assets/product/SusDashboard.png';

   
    interface FAQ {
        question: string;
        answer: string;
        expanded: boolean;
    }

    let faqs: FAQ[] = [
        {
            question: 'Would my information and data be secure in Sustainium’s platform?',
            answer: 'Absolutely Yes! As a SaaS-based service provider with over 12 years of accumulated group-wide experience at a global scale, we pride ourselves on maintaining a zero-data and information security breach track record. In addition to our strict internal guidelines, we meet some of the most stringent information security regulations in countries like the US, UK, Japan, Singapore, and other countries across the globe.  We provide Multi-Factor Authentication (MFA) and Azure Key Vault systems as a part of our standard feature.',
            expanded: false
        },
        {
            question: 'How is the Sustainium’s usability experience?',
            answer: 'Sustainium has guided UI for novices and is intuitive for those organizations with seasoned professionals.',
            expanded: false
        },
        {
            question: 'Do I need to be specially trained or do I have to read a user manual to know how to use Sustainium?',
            answer: 'Get support with our intuitive user-friendly prompts right from the start, and at every step when using the Sustainium web application for accounting and generating GHG reports. There is no need to read a lengthy User manual or go through any training to use our platform.',
            expanded: false
        },
        {
            question: 'What if I am not sure if the data is consistent with actual? Are there any in-tool data discrepancy prompts?',
            answer: 'As a standard feature, we have enabled prompts and suggestions when data or information is deemed insufficient or inconsistent. ',
            expanded: false
        },
        {
            question: 'Does Sustainium cover all Emission scope coverage? ',
            answer: 'Yes! We wouldnt provide it any other way! Sustainiums GHG Accounting and Reporting web application is streamlined for Scope 1, 2, and All 15 Categories under Scope 3 emissions. We provide a comprehensive solution (depth and breadth of scope coverage) through and through! ',
            expanded: false
        },
        {
            question: 'Do we use AI? and what for?  ',
            answer: 'Yes, we use AI for Emission Factor validation, for automated Emission Factor Database Import when you choose the source for the Emission Factor, and for other application purposes. ',
            expanded: false
        },
        {
            question: 'How about the readiness for Audit / GHG emissions report verification or validation by 1st or 2nd or 3rd Parties?   ',
            answer: 'We provide an Audit-Party access feature that allows you to provide a comprehensive trail of data sources, Emission Factors, Emission calculation methodologies, and other information you choose to share without revealing all contained information or data that is there. ',
            expanded: false
        },
        {
            question: 'Does Sustainium offer Automated data collection?  ',
            answer: 'Yes, we offer integration with other systems being used by your organization. Youll be able to learn more about it here. ',
            expanded: false
        },
        {
            question: 'Does Sustainium GHG accounting and reporting framework comply with internationally recognized guidelines?     ',
            answer: 'Sustainium is built on GHG Protocol. We also offer options to use other international standards such as ISO 14064. ',
            expanded: false
        },
        {
            question: 'Is there an option for Managed Carbon Accounting / Full Service where we do accounting and reporting for you?',
            answer: 'Yes, We have GHG / Carbon accounting in-house experts who can support you in carrying out GHG accounting and reporting to you as part of our premium feature service.',
            expanded: false
        },
        {
            question: 'I have an office in Dubai and in the USA, will I be able to calculate my GHG emissions? ',
            answer: 'Sustainium supports data and information for multiple Locations. It manages and consolidates data from multiple facilities or locations that have been generated from there. ',
            expanded: false
        },
        {
            question: 'How will the GHG report be generated?',
            answer: 'As a standard feature, we offer the option to generate the report per the GHG Protocol Reporting standard. We also have other custom report templates if you opt for them as a Premium feature. ',
            expanded: false
        },
        {
            question: 'What are the calculation approaches and methodologies the Sustainium  offers?',
            answer: 'We provide Options to enter GHG emissions directly, options to calculate using methodologies such as Activity-based (ex: Distance-based, Spend-based, and others), and other Hybrid approaches.',
            expanded: false
        },
        {
            question: 'I have capital goods and purchased goods and service expenses in my local currency and not in USD, do I need to convert each purchase that has been made into USD before using Sustainium?',
            answer: 'In Sustainium, you can enter purchase data based on your local currency, and it will automatically convert to USD using the exchange rate for the specified date of purchase. ',
            expanded: false
        },
        {
            question: 'Can I use the Sustainium web application in my local language? ',
            answer: 'Sustainium supports over 15 languages used across the globe. Click here to learn about the languages we cover. ',
            expanded: false
        }
    ];

    function toggleFAQ(index: number) {
        faqs = faqs.map((faq, i) => {
            if (i === index) {
                return { ...faq, expanded: !faq.expanded };
            }
            return faq;
        });
    }
</script>
<div class="lg:container">
<main class=" min-h-screen p-8 overflow-x-hidden">
    <section class="mb-6 md:mb-12 py-6 ">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
            <!-- Left Column -->
            <div>
                <h1 class="text-3xl  lg:text-[43px] lg:leading-[45px] font-bold mb-6 md:mb-10 mt-6 md:mt-10">
                    Sustainium: The Simplest, Fastest Way to Measure Scope 1, 2, 3
                </h1>
                <p class="text-gray-600 mb-6 md:mb-8 leading-relaxed">
                    Built on the GHG Protocol, Sustainium is a powerful tool designed by experts to simplify emissions tracking and reporting for novices and professionals.
                </p>
                <p class="text-gray-600 mb-6 md:mb-2 leading-relaxed">
                    Our Software enables to meticulously
                </p>
                <ul class="list-disc text-left ml-4 md:ml-8 text-black space-y-2">
                    <li><span class="text-[#09aa69] font-bold">Record</span> your GHG emissions.</li>
                    <li><span class="text-[#09aa69] font-bold">Report</span> on compliance with regulatory standards.</li>
                    <li><span class="text-[#09aa69] font-bold">Reduce</span> your GHG footprint, ensuring you stay ahead on the journey towards a sustainable future.</li>
                </ul>
            </div>
            <!-- Right Column -->
            <div class="relative flex justify-center items-center">
                <!-- Shape image behind the graph image -->
                <img src={shape1} alt="Shape" class="hidden md:block absolute w-full object-cover z-0 top-1">
                <!-- Graph-related image above the shape image -->
                <img src={main1} alt="Graph" class="relative z-10 max-w-md md:max-w-xl lg:max-w-lg w-full">
            </div>
                      
        </div>
    </section>
    
    <!-- //second section -->
    <section class="text-center mb-8 sm:mb-12 md:p-10">
        <h2 class="text-3xl sm:text-4xl font-semibold mb-4 sm:p-4">
            Why <span class="text-black font-bold">Sustainium?</span>
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 sm:p-8 text-left">
            <div class="py-8 sm:py-12 px-6 sm:px-10 h-64 sm:h-72 border border-gray-200 rounded-lg shadow bg-[#F5F5F5] flex flex-col justify-start">
                <h3 class="font-bold mb-2 text-xl sm:text-2xl">Holistic emissions management</h3>
                <p class="text-gray-600 text-md">
                    Record and manage your Scope 1, 2, and 3 emissions across multiple countries, all in one centralized platform.
                </p>
            </div>
            <div class="py-8 sm:py-12 px-6 sm:px-10 h-64 sm:h-72 border border-gray-200 rounded-lg shadow bg-[#F5F5F5] flex flex-col justify-start">
                <h3 class="font-bold mb-2 text-xl sm:text-2xl">Precision in every calculation</h3>
                <p class="text-gray-600 text-md">
                    Leverage an extensive emissions factor database, and transparent audit trails for accountability.
                </p>
            </div>
            <div class="py-8 sm:py-12 px-6 sm:px-10 h-64 sm:h-72 border border-gray-200 rounded-lg shadow bg-[#F5F5F5] flex flex-col justify-start">
                <h3 class="font-bold mb-2 text-xl sm:text-2xl">Optimised Dashboards</h3>
                <p class="text-gray-600 text-md">
                    Tailor your dashboards to display the metrics and emission categories that matter most to your organization.
                </p>
            </div>
            <div class="py-8 sm:py-12 px-6 sm:px-10 h-64 sm:h-72 border border-gray-200 rounded-lg shadow bg-[#F5F5F5] flex flex-col justify-start">
                <h3 class="font-bold mb-2 text-xl sm:text-2xl">AI-Driven Accounting</h3>
                <p class="text-gray-600 text-md">
                    Personalise your GHG accounting experience and identify unusual patterns in data using AI.
                </p>
            </div>
            <div class="py-8 sm:py-12 px-6 sm:px-10 h-64 sm:h-72 border border-gray-200 rounded-lg shadow bg-[#F5F5F5] flex flex-col justify-start">
                <h3 class="font-bold mb-2 text-xl sm:text-2xl">From insight to impact</h3>
                <p class="text-gray-600 text-md">
                    Model and visualize the impact of different emission reduction strategies in alignment with your projected business growth.
                </p>
            </div>
            <div class="py-8 sm:py-12 px-6 sm:px-10 h-64 sm:h-72 border border-gray-200 rounded-lg shadow bg-[#F5F5F5] flex flex-col justify-start">
                <h3 class="font-bold mb-2 text-xl sm:text-2xl">Custom reports for every stakeholder</h3>
                <p class="text-gray-600 text-md">
                    Tailor your reports to meet specific internal and external or regulatory requirements.
                </p>
            </div>
        </div>
    </section>
    <!-- //third section -->
    <section class="mb-8 md:mb-20 mt-6 md:mt-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Left Column -->
            <div class="p-6 md:p-10">
                <h2 class="text-3xl md:text-4xl font-normal mb-4">
                    Ready to see <br class="hidden md:inline"> Sustainium in <span class="text-[#00a763]">action</span>?
                </h2>
                <p class="text-gray-600 mb-4">
                    Book a demo by clicking on the button below and let us show you how our software can help your organization achieve its sustainability goals with ease and precision.
                </p>
                <a href="/book-a-demo">
                <button class="bg-[#09aa69] text-white py-2 px-6 rounded-full md:rounded-3xl shadow hover:bg-green-600">
                    Book a demo
                </button>
            </a>
            </div>
            <!-- Right Column -->
            <div class="flex justify-center items-center">
                <img src={feature2} alt="Another feature" class="w-full max-w-xs md:max-w-md mx-auto" />
            </div>
        </div>
    </section>
    
    <!-- 4th Client Logos Section -->
    <section class="mb-8 mt-6 md:mb-12 md:mt-10 border-t-2 border-b-2">
        <div class="flex flex-wrap justify-between items-center p-6 md:p-16">
            <div class="w-1/2 md:w-auto mb-2 px-1">
                <img src={feature6} alt="Client 2" class="h-10 md:h-14 w-full max-w-full">
            </div>
            <div class="w-1/2 md:w-auto mb-2 px-1">
                <img src={feature5} alt="Client 2" class="h-10 md:h-14 w-full max-w-full">
            </div>
            <div class="w-1/2 md:w-auto mb-2 px-1">
                <img src={feature4} alt="Client 3" class="h-12 md:h-16 w-full max-w-full">
            </div>
            <div class="w-1/2 md:w-auto mb-2 px-1">
                <img src={feature3} alt="Client 4" class="h-10 md:h-14 w-full max-w-full">
            </div>
        </div>
    </section>

    <!-- //5th section -->
    <section class="mb-8 md:mb-12 pt-8 md:pt-20 px-4 md:px-10">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Left Column -->
            <div class="flex justify-center items-center">
                <img src={feature8} alt="Another feature" class="w-full max-w-full md:max-w-md h-auto" />
            </div>
            <!-- Right Column -->
            <div class="p-6 md:p-10 flex flex-col justify-center">
                <h2 class="text-3xl md:text-4xl font-medium mb-4 text-[#00a560]">Security</h2>
                <p class="text-gray-600 mb-4">
                    Our software offers both cloud-based and on-premises deployment options, ensuring flexibility to match your security needs.
                </p>
                <div class="flex items-center space-x-2 mt-4">
                    <span class="inline-block border border-dashed border-gray-400 text-gray-600 text-sm font-medium px-2 py-1 rounded  items-center">
                      Coming soon
                      <!-- Right arrow icon using Remix Icon -->
                      <i class="ri-arrow-right-line ml-2 text-gray-600"></i>
                    </span>
                    <span class="coming-soon text-green-600 font-medium">
                      Visit Trust Center for detailed information 
                    </span>
                  </div>
            </div>
            
        </div>
    </section>

  <!-- //6th section -->
  <section class="  bg-[#138557] p-6 md:p-16">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Left Column -->
        <div class="md:pr-6">
            
            <h1 class="text-white text-4xl font-bold mb-8">
                Visualisations and data-driven insights
            </h1>
            <div class="space-y-8">
                <div class="bg-[#30be85] text-white p-6 rounded-2xl shadow-lg">
                    <h4 class="text-lg font-bold">Why Visual Data matters</h4>
                    <p class="text-white">
                        Easily interpret complex data with intuitive visualizations and leverage insights to make strategic sustainability choices.
                    </p>
                </div>
                <div class="bg-[#30be85] text-white p-6 rounded-2xl shadow-lg">
                    <h4 class="text-lg font-bold">Real Time Analytics</h4>
                    <p class="text-white">
                        Access up-to-date information on your carbon footprint and customize dashboards to focus on what matters most to you.
                    </p>
                </div>
                <div class="bg-[#30be85] text-white p-6 rounded-2xl shadow-lg">
                    <h4 class="text-lg font-bold">Segment Analysis and Trend Monitoring</h4>
                    <p class="text-white">
                        Break down emissions by source to identify improvement areas and track changes over time to observe progress and trends.
                    </p>
                </div>
            </div>
        </div>
        <!-- Right Column -->
        <div class="relative flex justify-center items-center">
            <!-- Shape image behind the graph image -->
            <img src={shape2} alt="Shape" class="hidden md:block absolute w-full  object-cover z-0">
            <!-- Graph-related image above the shape image -->
            <img src={feature1} alt="Graph" class="relative z-10 md:w-full -ml-8">
        </div>
    </div>
</section>

<!-- //7th section -->
<!-- <section class="mb-8 md:mb-12 pt-8 px-4 md:px-10">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        //Left Column 
        <div class="flex flex-col justify-center items-center md:items-start">
            <div class="p-6 md:p-0">
                <h2 class="text-3xl md:text-4xl font-bold mb-2 text-[#05a967]">Managed Carbon Accounting</h2>
                
                <p class="text-gray-400 mb-4 text-md max-w-lg">
                    You have a business to run. Stop worrying about data collection, choosing appropriate emission factors, and customizing reports. We have in-house expertise to do this for you.
                </p>
                <a href="/contact-us">
                    <button class="bg-[#09aa69] text-white text-sm py-2 px-7 rounded-3xl shadow hover:bg-green-600">
                        Contact Us
                    </button>
                </a>
            </div>
        </div>
        //Right Column
        <div class="flex justify-center items-center">
            <img src={feature7} alt="Another feature" class="w-full max-w-md md:max-w-full h-auto" />
        </div>
    </div>
</section> -->

    <section class="text-center mb-12  p-14">
        <h1 class="text-3xl font-bold mb-2">Our Services</h1>
        <p class="text-gray-600 mb-8">We provide the best solutions for your business</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Card 1 -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src={audit} alt="Service 1" class="mx-auto mb-4 w-16 " />
                <h2 class="text-xl font-bold mb-2 text-center">Localization</h2>
                <p class="text-gray-600 text-center">
                    Access the software in the language of your choice.
                </p>
            </div>
            <!-- Card 2 -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src={usability} alt="Service 2" class="mx-auto mb-4 w-16 h-16" />
                <h2 class="text-xl font-bold mb-2 text-center">Scalability</h2>
                <p class="text-gray-600 text-center">
                    Seamlessly manage multiple sites across various locations.
                </p>
            </div>
            <!-- Card 3 -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src={reporting} alt="Service 3" class="mx-auto mb-4 w-16 h-16" />
                <h2 class="text-xl font-bold mb-2 text-center">Automation</h2>
                <p class="text-gray-600 text-center">
                    Automate synchronization from diverse sources.
                </p>
            </div>
            <!-- Card 4 -->
            <div class="bg-white p-6 rounded-lg shadow-lg">
                <img src={coverage} alt="Service 4" class="mx-auto mb-4 w-16 h-16" />
                <h2 class="text-xl font-bold mb-2 text-center">Surveys</h2>
                <p class="text-gray-600 text-center">
                    Customize surveys to comprehensively cover your supply chain.
                </p>
            </div>
        </div>
    </section>
    <div class="max-w-3xl mx-auto ">
        <h2 class="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>

        {#each faqs as faq, index}
    <div class="mb-4">
        <div class="flex items-center justify-between p-4 {faq.expanded ? 'rounded-t-lg' : ''} {faq.expanded ? '' : 'border-b-2'}">
            <div class="text-lg font-semibold">{faq.question}</div>
            <button class="ml-2 text-gray-600 focus:outline-none text-2xl p-2" on:click={() => toggleFAQ(index)}>
                {faq.expanded ? '-' : '+'}
            </button>
        </div>
        <div class="faq-answer mt-2 px-4 py-2 {faq.expanded ? 'block' : 'hidden'}">
            <p class="text-gray-700">{faq.answer}</p>
        </div>
    </div>
{/each}
    

    </div>
</main>
</div>


<style>
   .faq-answer {
        display: none;
    }
    .faq-answer.block {
        display: block;
    }
</style>

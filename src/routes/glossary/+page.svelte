<script lang="ts">
    let cards = [
      { title: 'Greenhouse Gas Emissions:', description: ['<b>Scope 1, Scope 2, Scope 3:</b>  Categories used to classify greenhouse gas emissions. Scope 1 refers to direct emissions from owned or controlled sources, Scope 2 covers indirect emissions from purchased electricity, and Scope 3 includes indirect emissions from the entire value chain.',' <b>Carbon dioxide equivalent (CO2e):</b>  A standardized unit for measuring the total greenhouse gas emissions, representing the amount of carbon dioxide that would have the same global warming potential. '] },
      { title: 'Carbon Accounting Software Features:', description: ['<b>Emission tracking:</b>  The process of monitoring and recording greenhouse gas emissions produced by an organization.','<b>Trend analysis:</b>  Examining patterns or changes in emissions data over time to identify long-term trends.','<b>Anomaly detection:</b>  Identifying and flagging unusual or unexpected variations in emissions data.','<b>Benchmarking:</b>  Comparing an organizations emissions performance against industry peers or established standards.','<b>Predictive analysis:</b>  Using data and models to make predictions about future emissions trends.' ]},
      { title: 'Sustainability Frameworks:  ', description: ['<b>IPCC (Intergovernmental Panel on Climate Change):</b>  An international scientific body that assesses and reports on the scientific understanding of climate change.','<b>SBTi (Science-Based Targets initiative):</b>  A collaboration between organizations to set and achieve scientifically informed emissions reduction targets.','<b>GHG Protocol (Greenhouse Gas Protocol):</b>  A widely-used accounting tool for government and business leaders to understand, quantify, and manage greenhouse gas emissions. '] },
      { title: 'Emission Reduction Strategies:  ', description: ['<b> Net zero targets:</b>  Aims to balance the amount of greenhouse gases emitted with an equivalent amount removed from the atmosphere.','<b>Bespoke emission reduction plans:</b>  Customized plans designed to reduce an organizations specific greenhouse gas emissions.','<b>Renewable energy adoption:</b>  The integration of renewable energy sources, like solar or wind power, to replace or supplement traditional <br>energy sources.','<b>Circular economy practices:</b>  Strategies that prioritize the reuse, repair, and recycling of materials to minimize waste.'] },
      { title: 'Regulatory Compliance:  ', description: ['<b>Emissions regulations:</b>  Laws and rules set by governing bodies to limit and regulate the amount of greenhouse gas emissions.','<b>Legislative requirements:</b>  Mandatory measures established by government authorities to ensure adherence to environmental standards.','<b>Reporting standards:</b>  Specific guidelines and frameworks for reporting emissions data in a standardized manner.' ]},
      { title: 'Business Sectors and Industries:  ', description: ['<b>Product companies:</b>  Organizations involved in the manufacturing or production of physical goods.','<b>Built environment companies:</b>  Firms engaged in real estate development, construction, and infrastructure projects.','<b>  Manufacturing plants:</b>  Facilities where raw materials are transformed into finished products.','<b>Commercial real estate:</b>  Properties used for business purposes such as offices, retail spaces, and industrial facilities.' ]},
      { title: 'Key Performance Indicators (KPIs):  ', description: [' <b>Carbon intensity:</b>  The amount of carbon emissions produced per unit of economic output.',' <b>Emission intensity:</b>  The amount of greenhouse gas emissions produced per unit of activity or output.','<b>Carbon footprint per unit of production:</b>  The total greenhouse gas emissions associated with the production of a specific quantity of goods <br>or services.' ]},
      { title: 'Data Integration and Input:  ', description: ['<b>API (Application Programming Interface):</b>  A set of rules and protocols that allows different software applications to communicate and share data with each other.','<b>Data connectors:</b>  Software tools or modules that facilitate the transfer of data between different systems.','<b>Automated data feeds:</b>  Mechanisms that enable the automatic transfer of data from one system to another.','<b>Data standardization:</b>  The process of establishing uniform formats and structures for data to ensure consistency and compatibility.' ]},
      { title: 'Environmental Impact:  ', description: ['<b>Life Cycle Assessment (LCA):</b>  A comprehensive analysis of the environmental impact of a product or service throughout its entire life cycle, from raw material extraction to end-of-life disposal. ','<b>Carbon offsetting:</b>  The practice of compensating for ones own carbon emissions by investing in projects that reduce or capture an equivalent amount of emissions. ','<b>Environmental footprint:</b>  The overall impact an organization has on the environment, considering various factors like energy use, water consumption, and waste generation.','<b>Sustainable sourcing:</b>  Procuring goods and materials in an environmentally and socially responsible manner.' ]},
      { title: 'Operational Aspects:  ', description: ['<b>Energy consumption:</b>  The amount of energy used by an organization for various activities, including production, heating, cooling, and lighting.','<b>Waste management:</b>  The practices and processes involved in handling, disposing of, or recycling waste generated by an organization.','<b>Transportation emissions:</b>  Greenhouse gas emissions produced by vehicles used for business purposes.' ]},
      { title: 'Monitoring and Reporting:  ', description: ['<b>Sustainability reporting:</b>  The practice of publicly disclosing an organizations environmental, social, and governance (ESG) performance.','<b>Environmental disclosure:</b>  Communicating information about an organizations environmental practices, impacts, and performance.','<b>Emission inventories:</b>  Detailed records of an organizations greenhouse gas emissions, typically categorized by scope and source.' ]},
    ];
  </script>
  <div class=" container lg:m-10 pb-10">
  <section class="grid grid-cols-1 gap-6 px-8 rounded-3xl ">
    <h1 class="text-black text-4xl text-center font-bold mb-5">Glossary</h1>
    {#each cards as card}
      <div class="bg-white rounded-lg shadow-md p-6 border border-lime-400">
        <div class="border-b-2 lg:w-2/5 border-lime-500">
        <h3 class="lg:text-2xl font-bold mb-2">{card.title}</h3>
         </div>
        <ul class="list-disc pl-4 pt-3"> 
            {#each card.description as point}
              <li class="text-gray-700 text-md"> { @html point}</li>
            {/each}
          </ul>
      </div>
    {/each}
  </section>
</div>
  
  <style>
    /* Add any additional Tailwind CSS styles here */
  </style>
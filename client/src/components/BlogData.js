function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../blogImage', false, /\.(png|jpe?g|svg)$/));


const data = [
    {
        id: "9",
        title: "DafriGroup Acquires OMAHA Hotels",
        date: "DECEMBER 23, 2020",
        description: "DafiGroup PLC is pleased to announce that it has reached a definitive agreement with the UMEH group and has acquired OMAHA Hotels, a leading chain of luxury hotels.",
        src: images[8]
    },
    {
        id: "8",
        title: "DafriGroup PLC Appoints Chief Compliance Director.",
        date: "DECEMBER 21, 2020",
        description: "We are pleased to introduce our new Compliance Director Inge Laubscher who will assume this role effective immediately. She will serve across all DafriGroup's subsidiaries",
        src: images[7]
    },
    {
        id: "7",
        // name: "DafriGroup PLC Injects $5 Million Seed Funding in DafriBank®",
        title: "DafriGroup Plc To Introduce Payment Agent Across Its Digital Daughter Brands.",
        date: "DECEMBER 16, 2020",
        description: 'We are pleased to announce the introduction of Payment Agent (PA) feature across our platforms -- opening doors for digital economic opportunity for milllions of unbanked Africans…',
        src: images[6]
    },
    {
        id: "6",
        // name: "DafriGroup PLC Injects $5 Million Seed Funding in DafriBank®",
        title: "DafriGroup PLC Injects $5 Million Seed Funding in DafriBank®",
        date: "OCTOBER 20, 2020",
        description: 'DafriGroup is pleased to announce a $5 million initial investment to DafriBank. This will help jump start the development of products and services that will make DafriBank offering accessible to more…',
        src: images[5]
    },

    {
        id: "5",
        name: "Dr. Edward Obasi",
        title: "DafriBank Appoints Harvard Alumnus as Non-Executive Director",
        date: "OCTOBER 13, 2020",
        description: 'DafriBank PLC is pleased to announce the appointment of Dr. Edward Obasi in the role of Non-Executive Director with effect from 1st November 2020.',
        src: images[4]
    },

    {
        id: "4",
        title: "DAFRIBANK DONATES N100 MILLION TO EDUCATIONAL INITIATIVE IN NIGERIA",
        date: "September 12, 2020",
        description: 'The DafriGroup PLC through its daughter company DafriBank Limited has pledged a N100 million commitment to the Fund Kids Like Success Educational Initiative in the federal republic of Nigeria.',
        src: images[3]
    },

    {
        id: "3",
        title: "UMEH Group Donates R500000.00 to COVID- 19 Solidarity Response Fund",
        date: "April 2, 2020",
        description: 'The fight against the COVID-19 pandemic has intensified in South Africa with a 21-day period of lockdown which officially began this week. To assist the on-ground battle against the virus, Xolane Ndhlovu through his company UMEH Group Proprietary Limited has pledged an immediate donation of R500000.00 to support President Cyril Ramaphosa’s Solidarity Response Fund.',
        src: images[2]
    },
    
    {
        id: "2",
        title: "DafriBank Limited Appoints a New Chief Executive Officer",
        date: " September 1, 2020",
        description: 'We are pleased to announce Ramaswamy Easwaran as the new Chief Executive Officer of DafriBank Limited. Mr. Ramaswamy Easwaran will be taking up the charge with effect from 1st September 2020. As a banker, Mr. Easwaran has had an illustrious career spanning 18 years and is also an award-winning performer.',
        src: images[1]
    },

    {
        id: "1",
        title: "DafriGroup Plc Announced Its Digital Banking Ambition; DafriBank, A sustainable platform for all digital problems.",
        date: "August 9, 2020",
        description: 'The latest division of DafriGroup PLC is Africa’s pioneer digital banking solution to assist cyber entrepreneurs with digital monetary transactions across the continent.',
        src: images[0]
    },


]

export { data }
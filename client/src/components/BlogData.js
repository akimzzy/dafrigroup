function importAll(r) {
    return r.keys().map(r);
}

const images = importAll(require.context('../blogImage', false, /\.(png|jpe?g|svg)$/));


const data = [
    {
        id: "1",
        title: "DafriGroup Plc Announced Its Digital Banking Ambition; DafriBank, A sustainable platform for all digital problems.",
        date: "August 9, 2020",
        description: 'The latest division of DafriGroup PLC is Africa’s pioneer digital banking solution to assist cyber entrepreneurs with digital monetary transactions across the continent.',
        src: images[0]
    },
    {
        id: "2",
        title: "DafriBank Limited Appoints a New Chief Executive Officer",
        date: " September 1, 2020",
        description: 'We are pleased to announce Ramaswamy Easwaran as the new Chief Executive Officer of DafriBank Limited. Mr. Ramaswamy Easwaran will be taking up the charge with effect from 1st September 2020. As a banker, Mr. Easwaran has had an illustrious career spanning 18 years and is also an award-winning performer.',
        src: images[1]
    },
    {
        id: "3",
        title: "UMEH Group Donates R500000.00 to COVID- 19 Solidarity Response Fund",
        date: "April 2, 2020",
        description: 'The fight against the COVID-19 pandemic has intensified in South Africa with a 21-day period of lockdown which officially began this week. To assist the on-ground battle against the virus, Xolane Ndhlovu through his company UMEH Group Proprietary Limited has pledged an immediate donation of R500000.00 to support President Cyril Ramaphosa’s Solidarity Response Fund.',
        src: images[2]
    },
    {
        id: "4",
        title: "DAFRIBANK DONATES N100 MILLION TO EDUCATIONAL INITIATIVE IN NIGERIA",
        date: "September 12, 2020",
        description: 'The DafriGroup PLC through its daughter company DafriBank Limited has pledged a N100 million commitment to the Fund Kids Like Success Educational Initiative in the federal republic of Nigeria.',
        src: images[3]
    },


]

export { data }
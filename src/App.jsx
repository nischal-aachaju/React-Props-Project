import React from 'react'
import Card from './components/card'
const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://freelogopng.com/images/all_img/1688364728amazon-icon-black.png",
    companyName: "Amazon",
    datePosted: "5 days ago",
    jobTitle: "Senior UI/UX Designer",
    tags: ["Full Time", "Remote"],
    payRate: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://i.pinimg.com/564x/6b/83/f8/6b83f87e4e4b28810780883fd8563ede.jpg",
    companyName: "Microsoft",
    datePosted: "2 days ago",
    jobTitle: "Frontend Developer",
    tags: ["Full Time","remote"],
    payRate: "$95/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/meta-company-logo_265339-667.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "Meta",
    datePosted: "1 week ago",
    jobTitle: "Product Designer",
    tags: ["Full Time", "Hybrid"],
    payRate: "$110/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png",
    companyName: "Google",
    datePosted: "3 days ago",
    jobTitle: "UX Researcher",
    tags: ["Contract","Part-Time"],
    payRate: "$105/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://substackcdn.com/image/fetch/$s_!G1lk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8ed3d547-94ff-48e1-9f20-8c14a7030a02_2000x2000.jpeg",
    companyName: "Apple",
    datePosted: "6 days ago",
    jobTitle: "UI Engineer",
    tags: ["Full Time","Contract"],
    payRate: "$130/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaIYXICGp5nfqCplO4mjzJy1H0lztRtz75OQ&s",
    companyName: "Shopify",
    datePosted: "4 days ago",
    jobTitle: "React Developer",
    tags: ["Remote", "Freelance"],
    payRate: "$85/hr",
    location: "Remote, India"
  },
  {
    brandLogo: "https://i.pinimg.com/736x/e5/cb/66/e5cb66fe655e53d607210abe8015a7b0.jpg",
    companyName: "Samsung",
    datePosted: "2 weeks ago",
    jobTitle: "Mobile UI Designer",
    tags: ["Full Time","Part Time"],
    payRate: "$90/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs3JDrU8bfBWJ4Doig5na73-5gWU6bnqmU-w&s",
    companyName: "Adobe",
    datePosted: "1 day ago",
    jobTitle: "Visual Designer",
    tags: ["Internship","Part Time"],
    payRate: "$40/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://crystalpng.com/wp-content/uploads/2025/05/ibm-logo.png",
    companyName: "IBM",
    datePosted: "8 days ago",
    jobTitle: "UI Developer",
    tags: ["Part Time","Remote"],
    payRate: "$70/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://img.freepik.com/premium-vector/round-linkedin-logo-isolated-white-background_469489-985.jpg?semt=ais_hybrid&w=740&q=80",
    companyName: "LinkedIn",
    datePosted: "3 weeks ago",
    jobTitle: "Interaction Designer",
    tags: ["Full Time", "Hybrid"],
    payRate: "$115/hr",
    location: "Mumbai, India"
  }
];
jobOpenings.map(function(elems){ 
})
  return (
    <div className='parent'>
      {jobOpenings.map(function(elems,idx){
        return <div key={idx}><Card brandLogo={elems.brandLogo} companyName={elems.companyName} datePosted={elems.datePosted} jobTitle={elems.jobTitle} tag1={elems.tags[0]} tag2={elems.tags[1]} payRate={elems.payRate} location={elems.location}/>
                </div>
        })} 
    </div>
  )
}
export default App

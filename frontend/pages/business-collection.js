import React from 'react'
import Image from 'next/image' 
import logo from '../public/logo.png'
import { DashboardIcon, DownloadTaxDocs, InformationCollectionIcon, ReviewSubmissonIcon, UploadTaxIcon } from '@/components/SidebarIcons/Icons'
import BusinessStats from '@/components/InformationCollection/BusinessStats'
import Dashboard from '@/components/InformationCollection/Dashboard'
import UploadTax from '@/components/InformationCollection/UploadTax'
import ReviewAndSubmission from '@/components/InformationCollection/ReviewAndSubmission'
import SubmitAndDownload from '@/components/InformationCollection/SubmitAndDownload'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonalCollections from '@/components/InformationCollection/PersonalCollections'
import Headbar from '@/components/InformationCollection/Headbar'
import Head from 'next/head'
import Link from 'next/link'


function BusinessCollection() {
    const [component,setComponent] = React.useState('information collection')
    const [subMenu,setSubMenu] = React.useState(false)
    const [sideBar,setSideBar] = React.useState(false)
    
    const renderSwitch = (component) => {
        switch(component) {
            case "dashboard":
                return <Dashboard/>
            case "information collection":
                return <BusinessStats/>
            case "upload tax docs":
                return <UploadTax/>
            case "review and submission":
                return <ReviewAndSubmission/>
            case "submit and download":
                return <SubmitAndDownload/>
            case "personal collection":
                return <PersonalCollections/>
            default:
                null;
        }
      }


  return (

    <>
    <Head>
        <title>Information Collection</title>
      </Head>

        
        <div className="h-screen collection__screen bg-[#EFF3FD] grid sm:grid-cols-9 md:grid-cols-9 lg:grid-cols-9" >
            
            <div className="collection__screen__sidebar sm:col-span-3 md:col-span-3 lg:col-span-2 " style={{background:"#0B2558"}}>
                
                <Link className="logo " href='/'>
                    <Image className='pt-8 ps-10' src={logo} width={180} height={62} alt="Logo"/>
                </Link>

                <div className="sidebar_content mt-10 ms-4">

                    <div className="sidebar_content__item " style={{ background: component === "dashboard" ? "white" : "#0B2558"}} onClick={()=> setComponent("dashboard")}>
                        <DashboardIcon stroke={component === "dashboard" ? "#0B2558": "#EDF1FB"} />
                        <span style={{color:component === "dashboard" ? "#0B2558" : "white" }} >Dashboard</span>
                    </div>

                    <Accordion className="sidebar_content__item__accordian cursor-pointer"  style={{ background: component === "information collection" ? "white" : "#0B2558"}} onClick={()=> {setComponent("information collection"); setSubMenu(!subMenu)}}>
                        <AccordionSummary
                        expandIcon={<ExpandMoreIcon className={component === "information collection" ? "text-[#0B2558]" : "text-white"}/>}
                        aria-controls="panel1-content"
                        id="panel1-header"
                        >
                            <InformationCollectionIcon stroke={component === "information collection" ? "#0B2558" : "#EDF1FB"}/> 
                            <span style={{color:component === "information collection" ? "#0B2558" : "white" }} className='ps-5'>Information Collection</span> 
                        </AccordionSummary>
                    </Accordion>  

                    {
                        subMenu ? 
                        <>
                            <div className='flex items-center ps-8 py-2 rounded-l-3xl cursor-pointer '  style={{background: component === "personal collection" ? "white" : ""}}  onClick={() => setComponent("personal collection")} >
                            <span style={{color:component === "personal collection" ? "#0B2558" : "white"}} className=' text-4xl'>•</span>
                            <div style={{color:component === "personal collection" ? "#0B2558" : "white"}} className='ps-4' >Personal Collection</div>
                                
                            </div>

                            <div className=' flex items-center ps-8 py-2 rounded-l-3xl cursor-pointer'>
                            <span className='text-white text-4xl'>•</span>
                                <Accordion className=''>
                                    <AccordionSummary
                                    expandIcon={<ExpandMoreIcon className={component === "business collection" ? "text-[#0B2558]" : "text-[white]"}/>}
                                    aria-controls="panel1-content"
                                    id="panel1-header"
                                    >
                                    Business Collection
                                    
                                    </AccordionSummary>
                                </Accordion>   
                            </div>
                        </>
                        : ""
                    }

                    <div className="sidebar_content__item" style={{ background: component === "upload tax docs" ? "white" : "#0B2558"}} onClick={()=> setComponent("upload tax docs")}>
                        <UploadTaxIcon fill={component === "upload tax docs" ? "#0B2558" : "#EDF1FB"}/>
                        <span style={{color:component === "upload tax docs" ? "#0B2558" : "white" }}>Upload tax docs</span>
                    </div>
                    <div className="sidebar_content__item" style={{ background: component === "review and submission" ? "white" : "#0B2558"}} onClick={()=> setComponent("review and submission")}>
                        <ReviewSubmissonIcon stroke={component === "review and submission" ? "#0B2558" : "#EDF1FB"}/>
                        <span style={{color:component === "review and submission" ? "#0B2558" : "white" }}>Review & submission</span>
                    </div>
                    <div className="sidebar_content__item" style={{ background: component === "submit and download" ? "white" : "#0B2558"}} onClick={()=> setComponent("submit and download")}>
                        <DownloadTaxDocs fill={component === "submit and download" ? "#0B2558" : "#EDF1FB"}/>
                        <span style={{color:component === "submit and download" ? "#0B2558" : "white" }} >Submit & download tax docs</span>
                    </div>
                </div>
            </div>

            <div className="collection__screen__stats  sm:col-span-6 md:col-span-6 lg:col-span-7">
                <Headbar/>
                {renderSwitch(component)}
            </div>

        </div>

    </>
    )
}

export default BusinessCollection
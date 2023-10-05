import React ,{useState,useEffect}from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tabs, Tab, TabPanel, TabList } from 'react-web-tabs';
import data from '../products.json';

const DetailView = () => {
  const { id } = useParams();
  const [product,setProduct]=useState({});

  useEffect(()=>{
      const selectedProduct =data.find((p)=>p.id === parseInt(id));
      setProduct(selectedProduct);
   
  },[id]);
  return (
    <>
  
    <div className="container py-5">
    <ul className='inner_nav-ul'>
      <li>
        <Link to='/'> Home 
        </Link></li>| 
      <li>Details</li>
    </ul>
    <div className="main-body">

    <h2 className='py-2 mb-3'> </h2>
    <h3>{product.title}</h3>
    <p>{product.description}</p>

<button className='btn btn-outline-secondary btn_themed'>Book Now</button>

      <Tabs defaultTab="vertical-tab-one" vertical>
        <div className="row">
          <div className="col-sm-12 col-lg-12 ">
            <div className="card-body">
                <TabList className="tabs_order horizontal">
                <Tab tabFor="vertical-tab-one">Rates And Charges</Tab>
                <Tab tabFor="vertical-tab-two">How It Works</Tab>
                <Tab tabFor="vertical-tab-three">Terms & Conditions</Tab>
                <Tab tabFor="vertical-tab-four">FAQ's</Tab>
                </TabList>

            </div>
           
          </div>
        
            <TabPanel tabId="vertical-tab-one">

              <div className="card p-3 shadow-none border-0">
                <div className="card-body">
                  <div>

                  <table class="table">
  <thead class="table-dark">
    <tr>
      <th scope="col">#</th>
      <th scope="col"></th>
      <th scope="col"></th>
    
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>First 1 Hour</td>
      <td>₹ 299</td>
    
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Upto 1.5 Hrs</td>
      <td>₹ 399</td>
     
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Upto 2 Hrs</td>
      <td>₹ 509</td>
    
    </tr>
  </tbody>
</table>
                  </div>

                </div>
              </div>

            </TabPanel>

            <TabPanel tabId="vertical-tab-two">
              <div className="card p-3 shadow-none border-0">
                <div className="card-body">

                After you book the service, electricians in your area will receive a notification coordinated by ServiceProvider customer service. Kindly wait for the confirmation message.
Our service partner will call and note the details of the problem, to bring along the necessary tools and other equipment.
Make sure all materials for service are kept ready before service starts. In case you want the ServiceProvider partner to purchase the materials, let them know beforehand. The time taken for purchase of materials will be added as part of service charges.
ServiceProvider partner will give you a quotation if required for work that requires more than 4 hours. Work will be done only after your approval of the quote
When the work is over, our agent will let you know the service charge. Please make the payment accordingly online on our platform or by cash to the service provider

                </div>
              </div>

            </TabPanel>

            <TabPanel tabId="vertical-tab-three">

              <div className="card p-3 shadow-none border-0">
                <div className="card-body">
                 <dl>
                   <dt>
                     
                   </dt>
                   <dd></dd>
                 </dl>
                  ServiceProvider charges for unit of 1 hour of service initially, and every 30 minutes thereon
Material charges are additional. Customer can either purchase the material directly or request the service partner to procure it. Time for material procurement will be charged in the final bill
If the user decides not to proceed with the service delivery or reschedules the service after partner arrives at the user premises, Rs. 150 will be charged as inspection charges
An additional Rs. 150 will be added to the service charges for service delivery between 08:00 PM and 08:00 AM, on Sundays and public holidays.
Our service partner will help you with a quotation in case of long hour work schedules. Please confirm the quotation before initiating work to avoid any conflict on service completion. In case you do not want to continue service, we may charge Rs. 150 as inspection charge.
We offer upto 7 days warranty on the service in case of recurring issues of the same nature where repair was done
                </div>
              </div>

            </TabPanel>
            <TabPanel tabId="vertical-tab-four">

              <div className="card p-3 shadow-none border-0">
                <div className="card-body">
                  <dl>
                  <dt>
                      Why do I have to pay an inspection/minimum charge?
                      </dt>
                    <dd>
                    You dont have to pay a minimum charge in all cases. Inspection charge compensates the provider for his travel expenses, time, and effort, in case you decide not to proceed with the work after inspection is done
                    </dd>
                    <dt>
                    How do I ensure the authenticity of electricians who delivers service at my place?
                    </dt>
                    <dd>We have partnered with the most experienced electricians near your location, verified by ServiceProvider for their background, education, and experience. They are also trained for high levels of customer service</dd>
                    <dt>
                    Do they charge amount for the time spent on material purchase during service delivery?
                    </dt>
                    <dd>Yes, but our partner will ensure the purchase is done in minimum time. It is preferable to discuss with the electricians and get the necessary materials before the delivery to avoid additional costs.  </dd>
                  <dt>
                  What does happen if the provider spends more time at my place?
                  </dt>
                  <dd>
                  Our partners will try to deliver the services in minimum time, so that they can take up the next customer request, and thus earn more money. Our charges are defined in such a way that the more time they spend at a specific location, their opportunity to earn more is reduced. In case you want to continue for more hours, you can ask for a quote from the electricians who visit your place.  
                  </dd>
                  <dt>
                  Is there a warranty for electrical works?
                  </dt>
                  <dd>
                  Yes. We provide upto 7 days warranty on services delivered by our electrician partners. Warranty is applicable only on the specific work done earlier
                  </dd>
                  <dt>
                    
Are ServiceProvider services available round the clock?
                  </dt>
                  <dd>
                  Yes, we offer certain services 24 x 7 and our customer care team will be available to support you with delivering services on all days. 
                  </dd>
                  </dl>
                </div>
              </div>

            </TabPanel>
        
        </div>
      </Tabs>

    </div>
  </div>
  </>
  )
}

export default DetailView
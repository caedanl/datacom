import '../styles/Footer.css'

const footerContent = {
   "About us": [
      "Who we are",
      "Contact us",
      "News",
      "Rainbow Tick"
   ],
   "Work with us": [
      "Careers at Datacom",
      "Partners"
   ],
   "Social": [
      "Facebook",
      "Instagram",
      "LinkedIn",
      "Twitter",
      "YouTube"
   ]
}

const footerAsideContent = [
   "Privacy policy",
   "GDPR",
   "Terms of use",
   "Legal",
   "Shielded site",
   "Change location"
]

const Footer = () => {
   return (
      <footer>
         <div className="innerFooter">
            {
               Object.keys(footerContent).map((each) => (
                  <div className="card"><span className="title">{each}</span>
                     {
                        footerContent[each].map(item => (
                           <li>{item}</li>
                        ))
                     }
                  </div>
               ))
            }
            <aside>
               <div className="asideInner">
                  <ul>
                     {
                        footerAsideContent.map((each) => (
                           <li>{each}</li>
                        ))
                     }
                  </ul>
                  <span>Copyright © 2021 Datacom Group Ltd</span>
               </div>
            </aside>
         </div>
      </footer>
   )
}

export default Footer;
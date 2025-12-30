import H2Subsection from "../../components/h2_subsection"
import { LinkButtonRow } from "../../components/link_button";
import TLDR from "../../components/tldr"
import Link from "next/link";

export default function ContentAnl() {
    return (
        <div className="proj-content-styles">
            <TLDR 
                key="anl-0" 
                cols={[
                    {title:"Skills",items:["Python", "Tensorflow", "Keras", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Optuna"]}, 
                    {title:"Timeline",items:["May 2022 - August 2021"]}, 
                    {title:"Role",items:["Machine Learning Intern"]}, 
                    {title:"Team",items:["Jonathan Gao", "Supervisors: Raj Sankaran, Bobby Jackson, and Seongha Park"]}
                ]}
            />
            <LinkButtonRow 
                key="anl-1" 
                linkButtonProps={[
                    {linkUrl:"https://github.com/jontgao/waggle-plugin-solar-irradiance-forecasting", buttonProps:{text: "Project Github"}}
                ]}
            />
            <H2Subsection
                key="anl-2"
                subsectionTitle="Introduction"
                subsectionContent={
                    <>
                        <p key="anl-2-0">During my internship at <b>Argonne National Laboratory</b>, I developed and optimized a <b>recurrent neural network</b> (RNN) model for <b>forecasting solar energy production efficiency</b>. This work supported Argonne's nationwide Sage edge computing initiative, where my model is slated for deployment in hundreds of sensor devices across the United States.</p>
                        <p key="anl-2-2">To summarize my experience and impact, I</p>
                        <ul key="anl-2-3" className="list-disc">
                            <li><b>End-to-end trained, optimized, and deployed ML models</b> at a premier national lab.</li>
                            <li>Leveraged Argonne's <b>supercomputing clusters</b> for model training, enabling rapid experimentation with large datasets and complex architectures.</li>
                            <li>Developed <b>edge-ready ML models</b>, tailored for robust performance in distributed sensor networks.</li>
                        </ul>
                    </>
                }
            />
            <H2Subsection
                key="anl-3"
                subsectionTitle="Technical Approach"
                subsectionContent={
                    <>
                        <p key="anl-3-0">My predictive pipeline leveraged deep learning techniques to predict solar irradiance (a metric of how much solar energy will be produced based on meteorlogical factors) using historical irradiance and cloud coverage data. Energy forecasting, like done here, is a critical challenge for improving the effectiveness of renewable energy systems.</p>
                        <p key="anl-3-1">I implemented and evaluated multiple RNN architectures, including standard RNNs, LSTMs, and GRUs. Additionally, I sourced, analyzed, and pre-processed around six years of data. This process included:</p>
                        <ul key="anl-3-2" className="list-disc">
                            <li><b>Sourcing data:</b> I requested and obtained access to relevant datasets.</li>
                            <li><b>Pre-processing:</b> I analyzed and pre-processed datasets for quality and compatibility with time-series architectures. This included identifying lapses in datasets and determining the ideal cleaning methods.</li>
                            <li><b>Training:</b> I explored architectures and integrated frameworks for optimization search, including cell types, number of layer, and layer sizes.</li>
                            <li><b>Evaluation:</b> I benchmarked loss functions to gauge forecast precision for each trial.</li>
                        </ul>
                        <p key="anl-3-3">To improve performance further, I implemented a Mixture of Experts season-based model (effectively a parent model consisting of four child models, one fine-tuned for each meteorological season).</p>
                    </>
                }
            />
            <H2Subsection
                key="anl-4"
                subsectionTitle="Results & Deployment"
                subsectionContent={
                    <>
                        <p key="anl-4-0">After extensive training, the best-performing model was a <b>1-layer GRU with 32 neurons</b>. I then turned my focus towards deploying the model for Argonne's Sage network:</p>
                        <ul key="anl-4-1" className="list-disc">
                            <li><b>Model compression:</b> I compressed the model using TFLite (now known as LiteRT) to enable the model to best perform on edge devices.</li>
                            <li><b>Deployment:</b> I developed and integrated a <a href="https://github.com/jontgao/waggle-plugin-solar-irradiance-forecasting">plug-in</a> to deploy the model on edge devices, enabling real-time data collection and on-device inference.</li>
                        </ul>
                        <p key="anl-4-2">Ultimately, my work at Argonne grew my skills in ML model design, implementation, and deployment in real-world settings. Further, I gained extensive hands-on experience with data pre-processing and handling oh-so-many data quality issues. I am very grateful to have had the opportunity to collaborate with my supervisors in such a high-impact project.</p>
                        <p key="anl-4-3">While newer architectures are now leading the field in time-series prediction, my work ar Argonne played a critical role in developing an effective forecasting model for time-dependent data, especially with the constraints of edge deployment. As I have continued to learn about the ever-evolving energy field (like with my <Link href="/proj/siu">research at SIU</Link>), I hope to create further impact in projects like this.</p>
                        <p key="anl-4-4">My resulting plug-in and poster for my project can be viewed below.</p>
                        <LinkButtonRow 
                            key="anl-4-5" 
                            linkButtonProps={[
                                {linkUrl:"https://github.com/jontgao/waggle-plugin-solar-irradiance-forecasting", buttonProps:{text: "Project Github"}}
                            ]}
                        />
                        <object key="anl-4-6" data="/proj/anl/Gao-Jonathan-SULI-MCS.pdf" type="application/pdf" width="100%" height="720" />
                    </>
                }
            />
        </div>
    )
}

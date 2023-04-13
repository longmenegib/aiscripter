import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { FaAngleDown, FaExpand } from 'react-icons/fa';
import { Container } from 'react-bootstrap';
import styles from './../pages/page.module.css';

function FAQSection() {
    const faqs = [
        {
            question: 'What is AIScripter?',
            answer: 'AIScripter is a tool that uses AI models to generates video scripts for social media platforms like Facebook, TikTok, YouTube, and Instagram.'
        },
        {
            question: 'How does AIScripter work?',
            answer: 'AIScripter uses advanced algorithms and natural language processing to analyze your video content and generate a script that is optimized for engagement and conversion.'
        },
        {
            question: 'What social media platforms does AIScripter support?',
            answer: 'The current version of AIScripter is made to produce short video scripts for platforms like Facebook, TikTok, Instagram, YouTube, and others. Our algorithm is always being improved, and it is being optimized for more media networks and platforms.'
        },
        {
            question: 'Why should I use AIScripter?',
            answer: 'One of the best mediums for disseminating information is video since it engages viewers and can stir up the kind of feelings needed to establish enduring relationships. That is exactly what AIScripter is made to achieve. It is intended to produce excellent video scripts that connect with your audience.'
        },
        {
            question: 'Can I use AIScripter to generate marketing video?',
            answer: 'Yes. Various video tones are supported by AIScripter. Marketing videos can be made using the "Persuasive" tone. Other tones include "Informative", "Educational", and "Entertaining"'
        },
        {
            question: 'What is your refund policy?',
            answer:
                'We offer a 30-day money-back guarantee for all of our products. If you are not satisfied with your purchase, please contact us to initiate a refund.'
        },
        {
            question: 'How do you handle my personal information?',
            answer:
                'We take your privacy very seriously and will never share your personal information with third parties without your consent. For more information, please read our privacy policy.'
        }
    ];

    return (
        <Container>
            <div className="py-10 px-4 md:px-16">
                <div className="max-w-7xl mx-auto">
                    <h2 className={styles.heading} style={{ textAlign: 'center' }}>Frequently Asked <font color="#0356e4">Questions</font></h2>
                    <center style={{ marginTop: -10, marginBottom: 50 }}>What Will Like To Know?</center>
                    {faqs.map((faq, index) => (
                        <Accordion elevation={0} key={index} className="mb-4" style={{ }}>
                            <AccordionSummary expandIcon={<FaAngleDown />}>
                                <big>{faq.question}</big>
                            </AccordionSummary>
                            <AccordionDetails>
                                <p>{faq.answer}</p>
                            </AccordionDetails>
                        </Accordion>
                    ))}
                </div>
            </div>
        </Container>
    );
}

export default FAQSection;
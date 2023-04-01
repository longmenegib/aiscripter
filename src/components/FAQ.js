import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import { FaAngleDown, FaExpand } from 'react-icons/fa';


function FAQSection() {
    const faqs = [
        {
            question: 'What is AIScripter?',
            answer: 'AIScripter is a tool that generates video scripts for social media platforms like Facebook, TikTok, YouTube, and Instagram.'
        },
        {
            question: 'How does AIScripter work?',
            answer: 'AIScripter uses advanced algorithms and natural language processing to analyze your video content and generate a script that is optimized for engagement and conversion.'
        },
        {
            question: 'What social media platforms does AIScripter support?',
            answer: 'AIScripter supports multiple social media platforms, including Facebook, TikTok, YouTube, Instagram, and more.'
        },
        {
            question: 'Is my payment information secure?',
            answer:
                'Yes, we take security very seriously. We use a trusted payment processor that complies with the highest industry standards for data security.'
        },
        {
            question: 'What forms of payment do you accept?',
            answer:
                'We accept all major credit and debit cards, as well as PayPal and bank transfers.'
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
        <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-10 px-4 md:px-16">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
                {faqs.map((faq, index) => (
                    <Accordion key={index} className="shadow mb-4">
                        <AccordionSummary expandIcon={<FaAngleDown />}>
                            <Typography variant="h5">{faq.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>{faq.answer}</Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </div>
        </div>
    );
}

export default FAQSection;
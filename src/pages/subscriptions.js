import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import AppLayout from '../components/Container';

const plans = [
    {
        id: 1,
        name: 'Basic',
        price: '$19.99/month',
        img: '/subscription.svg',
        features: [
            'Up to 5 projects',
            '1000+ templates',
            'Email support',
            'No branding'
        ]
    },
    {
        id: 2,
        name: 'Pro',
        price: '$29.99/month',
        img: '/online-courses.svg',
        features: [
            'Up to 20 projects',
            '5000+ templates',
            'Priority support',
            'No branding'
        ]
    },
    {
        id: 3,
        name: 'Premium',
        price: '$49.99/month',
        img: '/premium.svg',
        features: [
            'Unlimited projects',
            '10,000+ templates',
            '24/7 support',
            'No branding'
        ]
    }
];

const SubscriptionPage = () => {
    const [selectedPlan, setSelectedPlan] = useState(plans[0]);

    const handleSelectPlan = (plan) => {
        setSelectedPlan(plan);
    };

    return (
        <AppLayout>
            <div className="container mx-auto py-10 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 ">
                <h2 className="text-2xl font-bold mb-6">
                    Your current subscription plan: Basic
                </h2>

                <div className="flex justify-center">
                    <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan) => (
                            <div
                                key={plan.id}
                                className={`${selectedPlan.id === plan.id ? 'border-blue-500 shadow-lg' : ''
                                    } border rounded-lg bg-white p-6`} style={{minWidth: 300}}
                            >
                                <h2 className="text-lg font-bold mb-2">{plan.name}</h2>
                                <img height={100} width={100} src={plan.img} alt="Premium plan illustration" className="mb-4" />
                                <p className="text-gray-600 font-medium mb-6">{plan.price}</p>
                                <ul className="mb-6">
                                    {plan.features.map((feature) => (
                                        <li className="flex items-center mb-2" key={feature}>
                                            <FaCheck className="text-green-500 mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button
                                    className={`${selectedPlan.id === plan.id ? 'bg-blue-500 text-white' : ''
                                        } px-4 py-2 rounded-full border ${selectedPlan.id === plan.id
                                            ? 'border-blue-500'
                                            : 'border-gray-400'
                                        } hover:bg-blue-500 hover:text-white transition-colors`}
                                    onClick={() => handleSelectPlan(plan)}
                                >
                                    {selectedPlan.id === plan.id ? 'Current Plan' : 'Select Plan'}
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="max-w-screen-lg mx-auto mt-10">

                    {/* <button className="px-4 py-2 bg-blue-500 text-white rounded-full shadow-md hover:bg-blue-600 transition-colors">
          Upgrade Plan
        </button> */}
                </div>
            </div>
        </AppLayout>
    );
};

export default SubscriptionPage;

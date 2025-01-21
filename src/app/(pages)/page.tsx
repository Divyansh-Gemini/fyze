import React from "react";
import RecommendationForm from "@/app/(pages)/RecommendationForm";
import PageTitle from "@/components/common/PageTitle";

const Home: React.FC = () => {
    return (
        <>
            <PageTitle text="Create Recommendation"/>

            <RecommendationForm/>
        </>
    );
};

export default Home;

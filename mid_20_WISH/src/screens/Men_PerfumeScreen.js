import React from "react";
import Men_PerfumeList from "../components/Men_PerfumeList";
import MenPerfumeData from "../json/Men_Perfume.json";
import { Box } from "@gluestack-ui/themed";


const Men_PerfumeScreen = () => {
    return(
        <Box style={{ backgroundColor: "#fff", height: 800 }}>
            <Men_PerfumeList MenPerfumeList={MenPerfumeData} />
        </Box>
    );
};

export default Men_PerfumeScreen;
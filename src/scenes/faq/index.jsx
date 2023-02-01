import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";


const Collection=({ title1, subtitle })=>{
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return(<Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            {title1}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {subtitle}
          </Typography>
        </AccordionDetails>
      </Accordion>)
}



const FAQ = () => {

  return (
    <Box>
    <Collection title1='An Important Question' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'/>
    <Collection title1='An Important Question' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'/>
    <Collection title1='An Important Question' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'/>
    <Collection title1='An Important Question' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'/>
    <Collection title1='An Important Question' subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.'/>
   
    
    </Box>
  
  );
};
export default FAQ;

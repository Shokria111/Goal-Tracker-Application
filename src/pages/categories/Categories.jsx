import {Stack} from "@mui/material";
import CategoryHeader from "../../components/categories/CategoryHeader";
import CategoryAnalyticsSection from "../../components/categories/PreviewCategory";
import CardParent from "../../components/categories/cardParentCategory";


function Categories() {

  return (
    <Stack
    spacing={3}
      sx={{
        width: "100%",
        minWidth: 0,
        px: { xs: 1.5, sm: 2, md: 3 },
      }}>
      <CategoryHeader/>
      <CategoryAnalyticsSection/>
      <CardParent/>
    </Stack>

  );
}
export default Categories; 
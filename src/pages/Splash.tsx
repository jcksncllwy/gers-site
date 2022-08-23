import BannerPage from "../components/layouts/BannerPage";
import BasicPage from "../components/layouts/BasicPage";
import StarField from "../components/molecules/StarField";

const Banner = () => {
    return (
        <StarField sx={{height: {sm:"200px", md:"400px"}}} />
    )
}

const Splash = () => {
    return (
        <BannerPage banner={<Banner />}>
            <img src="https://ltfowyvtpuhuazsxpcvn.supabase.co/storage/v1/object/public/public-images/GERS_Poster_11x17_2022_low_res.jpeg" />
        </BannerPage>
    )
}

export default Splash;
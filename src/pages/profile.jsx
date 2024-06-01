import IconButton from "../components/Buttons/IconButton";
import NoBgButton from "../components/Buttons/NoBGButton";
import PrimaryButton from "../components/Buttons/PrimaryButton";
import SecondaryButton from "../components/Buttons/SecondaryButton";
import CoverAlbum from "../components/CoverAlbum";

export function Profile() {
  //go ima icon kaj komentarite
  //nobg i ova vo modalot i kom

  return (
    <>
      <IconButton buttonText={"iconbutton"} />

      <NoBgButton buttonText={"nobg buuton"} />

      <PrimaryButton buttonText={"primarno"} />

      <SecondaryButton buttonText={"sekundarno"} />
    </>
  );
}

export default Profile;

import {TitleHeader, ProfilePicture} from './styled'

export const Header = ({
    profile
}) => {

    return(
        <TitleHeader>
            <ProfilePicture src={profile.profilePicture} />
            <h4>{profile.name}</h4>
            Insta4
        </TitleHeader>
    )
}
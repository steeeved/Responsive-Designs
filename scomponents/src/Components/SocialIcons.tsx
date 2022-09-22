import { FaTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa';
import { StyledSocialIcons } from './Styles/SocialIcons.styled';

export const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href='https://twitter.com/'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://facebook.com/'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://Linkedin.com/'>
          <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  );
};

import {LinkButtonProps} from "./link_button"

const RESUME_LINK = "https://drive.google.com/file/d/1pg4_4Ea4ukKqLQKGQJknp6tQ39HW8Yxy/view?usp=sharing"

export const socials: LinkButtonProps[] = [
  {
    linkUrl: "https://github.com/jontgao",
    buttonProps: {
      text: "GitHub",
      iconName: "github",
    }
  }, {
    linkUrl: "https://www.linkedin.com/in/jonathan-t-gao/",
    buttonProps: {
      text: "LinkedIn",
      iconName: "linkedin",
    }
  }, {
    linkUrl: RESUME_LINK,
    buttonProps: {
      text: "Resume",
    }
  }
]

export const navLinks = [
  {
    text: "Home",
    linkUrl: "/"
  }, {
    text: "About",
    linkUrl: "#about"
  }, {
    text: "Resume",
    linkUrl: RESUME_LINK,
  }
]

export const footerLinks = [
  {
    text: "GitHub",
    linkUrl: "https://github.com/jontgao",
  }, {
    text: "LinkedIn",
    linkUrl: "https://www.linkedin.com/in/jonathan-t-gao/",
  }, {
    text: "Resume",
    linkUrl: RESUME_LINK,
  }, //{
  //   text: "Email",
  //   linkUrl: "",
  // }
]
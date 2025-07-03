import {ProjCategories} from "../proj/projData"
import {iconMap} from "./icon"
import {LinkButtonProps} from "./link_button"

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
    linkUrl: "",
    buttonProps: {
      text: "Resume",
    }
  }
]

export const filters = [
  {
    id: 0,
    text: "Featured",
    category: ProjCategories.Featured,
  }, {
    id: 5,
    text: "All",
    category: ProjCategories.All,
  }, {
    id: 1,
    text: "AI/ML",
    category: ProjCategories.ML,
  }, {
    id: 2,
    text: "Software Engineering",
    category: ProjCategories.SWE,
  }, {
    id: 3,
    text: "Design",
    category: ProjCategories.Design,
  }, {
    id: 4,
    text: "Leadership",
    category: ProjCategories.Leadership,
  }
]

export const navLinks = [
  {
    id: 0,
    text: "Home",
    linkUrl: "/"
  }, {
    id: 1,
    text: "About",
    linkUrl: "#about"
  }, {
    id: 2,
    text: "Resume",
    linkUrl: "https://en.wikipedia.org/wiki/Resume"
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
    linkUrl: "",
  }, {
    text: "Email",
    linkUrl: "",
  }
]

export const albums = [
    {
      id: 0,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/1/1f/Taylor_Swift_-_Taylor_Swift.png",
      title: "Taylor Swift",
      categories: [ProjCategories.SWE, ProjCategories.Design],
      linkUrl: "https://tserasarchive.taylorswift.com/selftitled",
      tags: ["1", "2"],
    }, {
      id: 1,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5b/Fearless_%28Taylor%27s_Version%29_%282021_album_cover%29_by_Taylor_Swift.png",
      title: "Fearless (Taylor's Version)",
      categories: [ProjCategories.Featured, ProjCategories.ML, ProjCategories.SWE, ProjCategories.Design],
      linkUrl: "https://tserasarchive.taylorswift.com/fearlesstv",
      tags: ["1"],
      className: "text-slate-300"
    }, {
      id: 2,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/5/5b/Taylor_Swift_-_Speak_Now_%28Taylor%27s_Version%29.png",
      title: "Speak Now (Taylor's Version)",
      categories: [ProjCategories.Design],
      linkUrl: "https://tserasarchive.taylorswift.com/speaknowtv",
      tags: ["2"],
    }, {
      id: 3,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/47/Taylor_Swift_-_Red_%28Taylor%27s_Version%29.png",
      title: "Red (Taylor's Version)",
      categories: [ProjCategories.Featured, ProjCategories.ML],
    }, {
      id: 4,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/d5/Taylor_Swift_-_1989_%28Taylor%27s_Version%29.png",
      title: "1989 (Taylor's Version)",
      categories: [ProjCategories.Featured, ProjCategories.ML],
    }, {
      id: 5,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f2/Taylor_Swift_-_Reputation.png",
      title: "reputation",
      categories: [ProjCategories.Featured, ProjCategories.ML],
    }, {
      id: 6,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/c/cd/Taylor_Swift_-_Lover.png",
      title: "Lover",
      categories: [ProjCategories.Featured, ProjCategories.ML],
    }, {
      id: 7,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/f/f8/Taylor_Swift_-_Folklore.png",
      title: "folklore",
      categories: [ProjCategories.Featured, ProjCategories.ML],
    }, {
      id: 8,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/0/0a/Taylor_Swift_-_Evermore.png",
      title: "evermore",
      categories: [ProjCategories.Featured, ProjCategories.ML],
    }, {
      id: 9,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/9/9f/Midnights_-_Taylor_Swift.png",
      title: "Midnights",
      categories: [ProjCategories.Featured, ProjCategories.ML],
    }, {
      id: 10,
      imageUrl: "https://upload.wikimedia.org/wikipedia/en/6/6e/Taylor_Swift_%E2%80%93_The_Tortured_Poets_Department_%28album_cover%29.png",
      title: "The Tortured Poets Department",
      categories: [ProjCategories.Featured, ProjCategories.ML],
    }
  ]
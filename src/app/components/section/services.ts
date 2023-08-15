export type Service = {
  title: string;
  imageUrl1: string;
  imageUrl2: string;
  link: string;
  isHovered: boolean;
};

const services: Service[] = [
  {
    title: "Poster Designing",
    imageUrl1:
      "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=879&q=80",
    imageUrl2:
      "https://img.freepik.com/free-vector/website-interface-development-planning-devops-team-flat-characters-working-ui-ux-content-design-computer-software-creation-web-development_335657-2645.jpg?w=740&t=st=1688927928~exp=1688928528~hmac=ec2bf68fb2551a3d937c04571991b7edc8ecccef4978fe5f186ea6424dabb6ea",
    link: "/service1",
    isHovered: false,
  },
  {
    title: "Cartoon Designing",
    imageUrl1:
      "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=879&q=80",
    imageUrl2:
      "https://img.freepik.com/free-vector/website-interface-development-planning-devops-team-flat-characters-working-ui-ux-content-design-computer-software-creation-web-development_335657-2645.jpg?w=740&t=st=1688927928~exp=1688928528~hmac=ec2bf68fb2551a3d937c04571991b7edc8ecccef4978fe5f186ea6424dabb6ea",
    link: "/service2",
    isHovered: false,
  },
  {
    title: "Web Designing",
    imageUrl1:
      "https://images.unsplash.com/photo-1574169208507-84376144848b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=879&q=80",
    imageUrl2:
      "https://img.freepik.com/free-vector/website-interface-development-planning-devops-team-flat-characters-working-ui-ux-content-design-computer-software-creation-web-development_335657-2645.jpg?w=740&t=st=1688927928~exp=1688928528~hmac=ec2bf68fb2551a3d937c04571991b7edc8ecccef4978fe5f186ea6424dabb6ea",
    link: "/service3",
    isHovered: false,
  },
];

export default services;

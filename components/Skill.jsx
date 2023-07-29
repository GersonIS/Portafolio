import { Grid, Text, Image } from "@nextui-org/react";

const Skill = () => {
    const skills = [
        {
            src: "html.png",
            alt: "Image HTML",
            name: "HTML"
        },
        {
            src: "css.png",
            alt: "Image CSS",
            name: "CSS"
        },
        {
            src: "/js.png",
            alt: "Image JS",
            name: "JavaScript"
        },
        {
            src: "/bootstrap.png",
            alt: "Image BOOTSTRAP",
            name: "Bootstrap"
        },
        {
            src: "/laravel.png",
            alt: "Image LARAVEL",
            name: "Laravel"
        },
        {
            src: "/react.png",
            alt: "Image REACT",
            name: "React JS"
        },
        {
            src: "/next.png",
            alt: "Image NEXTJS",
            name: "Next JS"
        },
        {
            src: "/node-js.png",
            alt: "Image NODE",
            name: "Node JS"
        },
        {
            src: "/material-ui.png",
            alt: "Image MATERIAL",
            name: "Material UI"
        },
        {
            src: "/next.png",
            alt: "Image NEXTUI",
            name: "Next UI"
        },
        {
            src: "/sequelize.png",
            alt: "Image SEQUELIZE",
            name: "Sequelize"
        },
    ]

    return (
        <Grid.Container css={{ display: "block", marginBottom: "$10" }}>
            <Grid css={{ textAlign: "center" }}>
                <Text h2 color="black" css={{ w: "100%" }}>
                    Skills
                </Text>
            </Grid>
            <Grid.Container css={{ textAlign: "center", display: "flex", justifyContent: "center" }} gap={5} >
                {skills.map((el, index) => (<Grid css={{
                    display: "block", '&:hover': {
                        background: '$gray200',
                        color: '$gray600',
                    },
                }}><Image
                        showSkeleton
                        maxDelay={10000}
                        width={40}
                        height={40}
                        src={el.src}
                        alt={el.alt}
                        key={index}
                        className="animated-grid" />
                    <Text h6 color="black">
                        {el.name}
                    </Text></Grid>
                ))}
            </Grid.Container>
        </Grid.Container>
    )
}

export default Skill
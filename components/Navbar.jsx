import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { AcmeLogo } from "./icons/AcmeLogo.js";
import { useEffect, useState } from "react";

const NavBar = () => {
    const collapseItems = [
        {
            id: "about",
            name: "About"
        },
        {
            id: "skill",
            name: "Skill"
        },
        {
            id: "project",
            name: "Project"
        },
        {
            id: "contact",
            name: "Contact"
        },
    ];
    const [active, setActive] = useState("");
    useEffect(() => {
        // Obtener la URL completa del navegador
        const currentURL = window.location.href;
    
        // Verificar si la URL contiene un hash (#)
        if (currentURL.includes('#')) {
          // Eliminar el hash y redirigir a la versión sin el hash
          const cleanURL = currentURL.split('#')[1] || "";
          setActive(cleanURL)
        }
      }, []);
      

    const activo = (texto) => {
        setActive(texto);
    }
   

    return (
        <Navbar variant="sticky" css={{ background: "$accents9" }}>
            <Navbar.Toggle showIn="xs" />
            <Navbar.Brand
                css={{
                    "@xs": {
                        w: "12%",
                    },
                }}
            >
                <AcmeLogo />
                <Text b color="inherit" hideIn="xs">
                    GR
                </Text>
            </Navbar.Brand>
            <Navbar.Content
                enableCursorHighlight
                activeColor="secondary"
                hideIn="xs"
                variant="highlight-rounded"
            >
                <Navbar.Link autoFocus href="#about" onClick={() => activo("about")} isActive={active === "about" || active === "" ? true : false}>About</Navbar.Link>
                <Navbar.Link href="#skill" onClick={() => activo("skill")} isActive={active === "skill" ? true : false}>Skills</Navbar.Link>
                <Navbar.Link href="#project" onClick={() => activo("project")} isActive={active === "project" ? true : false}>Projects</Navbar.Link>
                <Navbar.Link href="#contact" onClick={() => activo("contact")} isActive={active === "contact" ? true : false}>Contact</Navbar.Link>
            </Navbar.Content>
            <Navbar.Content
                css={{
                    "@xs": {
                        w: "12%",
                        jc: "flex-end",
                    },
                }}
            >
                <Dropdown placement="bottom-right">
                    <Navbar.Item>
                        <Dropdown.Trigger>
                            <Avatar
                                bordered
                                as="button"
                                color="secondary"
                                size="md"
                                src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                            />
                        </Dropdown.Trigger>
                    </Navbar.Item>
                    <Dropdown.Menu
                        aria-label="User menu actions"
                        color="secondary"
                        onAction={(actionKey) => console.log({ actionKey })}
                    >
                        <Dropdown.Item key="profile" css={{ height: "$18" }}>
                            <Text b color="inherit" css={{ d: "flex" }}>
                                Signed in as
                            </Text>
                            <Text b color="inherit" css={{ d: "flex" }}>
                                zoey@example.com
                            </Text>
                        </Dropdown.Item>
                        <Dropdown.Item key="settings" withDivider>
                            My Settings
                        </Dropdown.Item>
                        <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
                        <Dropdown.Item key="analytics" withDivider>
                            Analytics
                        </Dropdown.Item>
                        <Dropdown.Item key="system">System</Dropdown.Item>
                        <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
                        <Dropdown.Item key="help_and_feedback" withDivider>
                            Help & Feedback
                        </Dropdown.Item>
                        <Dropdown.Item key="logout" withDivider color="error">
                            Log Out
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Navbar.Content>
            <Navbar.Collapse>
                {collapseItems.map((el, index) => (
                    <Navbar.CollapseItem
                        key={index}
                        activeColor="secondary"
                        isActive={el.id === active}
                    >
                        <Link
                            color="inherit"
                            onClick={() => activo(el.id)}
                            css={{
                                minWidth: "100%",
                            }}
                            href={`#${el.id}`}
                        >
                            {el.name}
                        </Link>
                    </Navbar.CollapseItem>
                ))}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavBar;
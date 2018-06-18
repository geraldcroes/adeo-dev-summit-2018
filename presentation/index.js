// Import React
import React from "react";
// Import Spectacle Core tags
import {Appear, Code, Deck, Heading, Image, Link, List, ListItem, Slide, Spectacle, Text, Notes} from "spectacle";
// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";
// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    traefik: require("../assets/figures/traefik.logo.svg"),
    asterix: require("../assets/asterix.jpg"),
    asterix_premise: require("../assets/asterix-premise.jpg"),
    charlie: require("../assets/where-is-charlie.jpg"),
    why: require("../assets/why.jpg"),
    provider_kubernetes: require("../assets/providers-logo/kubernetes.png"),
    provider_docker_swarm: require("../assets/providers-logo/docker-swarm.png"),
    provider_docker: require("../assets/providers-logo/docker.png"),
    provider_mesos: require("../assets/providers-logo/mesos.png"),
    provider_marathon: require("../assets/providers-logo/marathon.png"),
    provider_rancheros: require("../assets/providers-logo/rancher-os.png"),
    provider_ec2: require("../assets/providers-logo/ec2.png"),
    provider_ecs: require("../assets/providers-logo/ecs.png"),
    provider_servicefabric: require("../assets/providers-logo/service-fabric.png"),
    provider_consul: require("../assets/providers-logo/consul.png"),
    provider_netflix_oss: require("../assets/providers-logo/netflix_oss.png"),
    provider_etcd: require("../assets/providers-logo/etcd.png"),
    provider_zookeeper: require("../assets/providers-logo/zookeeper.png"),
    provider_dynamodb: require("../assets/providers-logo/dynamodb.png"),
    reverse_proxy: require("../assets/reverse-proxy.png"),
    matrix_if_i_told_you: require("../assets/what-if-I-told-you.jpg"),
    need_help: require("../assets/yes-help-please.jpg"),
    traefik_architecture: require("../assets/figures/traefik-architecture.svg"),
    traefik_internal_architecture: require("../assets/figures/architecture-overview.svg"),
    boring: require("../assets/boring.jpg"),
    celebrate: require("../assets/happy.jpg"),
    handson: require("../assets/hands-on.jpg"),
};

preloader(images);

const theme = createTheme({
    primary: "#37ABC8",
    white: "#e2e2e2",
    secondary: "#1F2022",
    tertiary: "#e2e2e2",
    quartenary: "#CECECE"
}, {
    primary: "Montserrat",
    secondary: "Lobster Two"
});

export default class Presentation extends React.Component {
    render() {
        return (
            <Deck transition={["slide"]} transitionDuration={300} theme={theme}>

                <Slide bgColor="white">
                    <Image src={images.traefik.replace("/", "")} margin="0px auto 20px" fit height="200"/>
                    <Heading size={2} textColor="primary">
                        Reverse Proxy Made Simple
                    </Heading>
                    <Text margin="40">Gérald Croes — Julien Salleyron</Text>
                    <Text margin="40">ADEO Dev Summit 2018</Text>
                </Slide>

                <Slide>
                    <Heading textColor="white">
                        $ cat speakers
                    </Heading>
                    <List fit textColor="white">
                        <Appear><ListItem>Developers @ Containous</ListItem></Appear>
                        <Appear><ListItem>Worst DIYers ever ...</ListItem></Appear>
                        <Appear><ListItem>... and let's not talk about gardening!</ListItem></Appear>
                        <Appear><ListItem>We used to have real jobs</ListItem></Appear>
                        <Appear><ListItem>Developer, Lead Developer, Software Architect, CIO, CEA, ...</ListItem></Appear>
                    </List>
                </Slide>

                <Slide>
                    <Heading>Part 1 - Why?</Heading>
                    <Image src={images.why.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                    <Text textColor="white">Why, Mr Anderson?</Text>
                </Slide>

                <Slide>
                    <Heading>Evolution of Software Design</Heading>
                    <Text>Diagram with monolith in a datacenter on a machine vs datacenters, with machines and multiple instances of the service</Text>
                </Slide>

                <Slide>
                    <Heading>The Premise of Microservices...</Heading>
                    <Image src={images.asterix_premise.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide>
                    <Heading>...and what happens</Heading>
                    <Image src={images.asterix.replace("/", "")} margin="0px auto 20px" fit height="300"/>
                </Slide>

                <Slide bgColor="white">
                    <Heading textColor={"primary"}>Tools of the Trade</Heading>
                    <Image src={images.provider_docker.replace("/", "")} margin="0px auto 20px" fit height="100"/>
                    <Image src={images.provider_docker_swarm.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_kubernetes.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_mesos.replace("/", "")} margin="0px auto 20px" fit height="100"/>
                    <Image src={images.provider_marathon.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_rancheros.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_ec2.replace("/", "")} margin="0px auto 20px" fit height="100"/>
                    <Image src={images.provider_ecs.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_servicefabric.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_consul.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_netflix_oss.replace("/", "")} margin="0px auto 20px" fit height="100"/>

                    <Image src={images.provider_etcd.replace("/", "")} margin="0px auto 20px" fit height="100"/>
                    <Image src={images.provider_zookeeper.replace("/", "")} margin="0px auto 20px" fit height="100"/>
                    <Image src={images.provider_dynamodb.replace("/", "")} margin="0px auto 20px" fit height="100"/>
                </Slide>

                <Slide>
                    <Heading>Where is the service?</Heading>
                    <Image src={images.charlie.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"}>Routes to your Services</Heading>
                    <Image src={images.reverse_proxy.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide>
                    <Heading>The Configuration File to Make it Happen</Heading>
                    <Image src={images.reverse_proxy.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide>
                    <Heading>What If I Told You</Heading>
                    <Image src={images.matrix_if_i_told_you.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                    <Text>That You Don't Have to Write This Configuration File...?</Text>
                </Slide>

                <Slide>
                    <Image src={images.need_help.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"}>Here Comes Traefik!</Heading>
                    <Image src={images.traefik_architecture.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"}>Part 2 - Core Concepts</Heading>
                    <Image src={images.boring.replace("/", "")} margin="0px auto 20px" fit height="400"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Image src={images.traefik_internal_architecture.replace("/", "")} margin="0px auto 20px" fit height="500"/>
                </Slide>

                <Slide bgColor={"white"}>
                    <Heading textColor={"primary"}>End of Part 2</Heading>
                    <Image src={images.celebrate.replace("/", "")} margin="0px auto 20px" fit height="500"/>
                </Slide>

                <Slide>
                    <Heading>Part 3 - Hands On</Heading>
                    <Image src={images.handson.replace("/", "")} margin="0px auto 20px" fit height="500"/>
                </Slide>

                <Slide>
                    <Notes>
                    <ol>
                      <li>
                      We had an existing docker-compose file with 1 front service and 2 api services
                      </li>
                    </ol>
                    </Notes>
                    <Heading>Use case</Heading>
                </Slide>

                <Slide>
                <Notes>
                <ol>
                  <li>
                  We start Traefik with new docker-compose file (with config toml file)
                  </li>
                  <li>
                  And everythings works (debug bar, call to the exposed services)
                  </li>
                </ol>
                </Notes>
                    <Heading>Connecting Services</Heading>
                </Slide>

                <Slide>
                <Notes>
                <ol>
                  <li>
                  Modify with [api]dashboard=true
                  </li>
                  <li>
                  Show dashboard
                  </li>
                </ol>
                </Notes>
                    <Heading>You told Me I'd Knew Where Was Charlie</Heading>
                </Slide>

                <Slide>
                <Notes>
                <ol>
                  <li>
                  Gerald: The phone rings, I need to answer, this is the security guy!
                  </li>
                  <li>
                  Gerald: You want it in HTTPS? Oh my god, Julien, can you help me?
                  </li>
                  <li>
                    Julien: Do you already have a certificate?
                  </li>
                  <li>
                    Gerald: Arf no!
                  </li>
                  <li>
                    Julien: No problem, we will use Let's encrypt
                  </li>
                  <li>
                    Add LE in configuration (redirect), restart, and everythings works in https
                  </li>
                </ol>
                </Notes>
                    <Heading>Let's Make It Secure</Heading>
                </Slide>

                <Slide>
                <Notes>
                <ol>
                  <li>
                  Gerald: I have a new service, we will need to restart everything :(
                  </li>
                  <li>
                  Julien: No problem, with a new Hostname? No problem
                  </li>
                  </ol>
                  </Notes>
                    <Heading>New services</Heading>
                </Slide>
                <Slide>
                <Notes>
                <ol>
                  <li>
                  Gerald: This service is really (gourmand), can we deploy two instances and load balance?
                  </li>
                  <li>
                  Julien: It will be complicated, give me one or two weeks: docker-compose --scale=2
                  </li>
                  </ol>
                  </Notes>
                    <Heading>Can We Scale?</Heading>
                </Slide>
                <Slide>
                <Notes>
                <ol>
                  <li>
                  Gerald: We have a problem, our sessions is in the container :grin: :vomit:
                  </li>
                  <li>
                  Julien: I can had sticky!
                  </li>
                  </ol>
                  </Notes>
                    <Heading>Session Bug?</Heading>
                </Slide>
                <Slide>
                  <Notes>
                  Sometimes it fails, you can healthcheck on /health
                  </Notes>
                    <Heading>Healthcheck</Heading>
                </Slide>
                <Slide>
                    <Notes>
                      BI is calling? Can we have some stats?
                      No problem with what? Stats? Datadog? InfluxDB? we are using Prometheus!
                      That's ok, I can handle that!
                    </Notes>
                    <Heading>Can I See What's Going On?</Heading>
                </Slide>
                <Slide>
                    <Notes>
                      Waouh lots of traffic!
                      Can we see accesslogs? in json?
                    </Notes>
                    <Heading>Access logs</Heading>
                </Slide>
                <Slide>
                    <Notes>
                      Oups, security guy again, https is still working?
                      Allo? I need to redact some fields? Euh?? (Julien fait oui de la tete)
                    </Notes>
                    <Heading>PRGD</Heading>
                </Slide>
                <Slide>
                <Notes>
                We think about deploying our services in Kubernetes?
                No problem, we only have to change the configuration with [kubernetes] and deploy Traefik as an ingress controller.
                That's all!!
                </Notes>
                  <Heading>Kubernetes project</Heading>
                </Slide>
                <Slide>
                    <Heading>Part 4 -- Before We Leave</Heading>

                </Slide>

                <Slide>
                    <ListItem>Websocket</ListItem>
                    <ListItem>Circuit Breaker</ListItem>
                    <ListItem>Cluster Mode 1.1</ListItem>
                    <ListItem>Health Check -- sort un serveur d’un backend 1.2</ListItem>
                    <ListItem>SSL redirect 1.4</ListItem>
                    <ListItem>Auth Forward 1.4</ListItem>
                    <ListItem>Custom Error Pages 1.4</ListItem>
                    <ListItem>Custom Headers 1.4</ListItem>
                    <ListItem>Proxy Protocol (header x forwarded may niveau TCP) 1.4</ListItem>
                    <ListItem>Image Docker Multi Arch (conteneur docker déployé sur autre chose qu’un proc 64bit) 1.4</ListItem>
                    <ListItem>HSTS 1.4</ListItem>
                    <ListItem>Rate Limiting 1.5 (demo)</ListItem>
                    <ListItem>Dynamic TLS Certificate 1.5</ListItem>
                    <ListItem>Wildcard Certificate 1.6</ListItem>
                    <ListItem>Zipkin 1.6</ListItem>
                    <ListItem>Kubernetes Secrets 1.6</ListItem>
                </Slide>

                <Slide>
                    <Heading>Develop With Traefik!</Heading>
                </Slide>

                <Slide>
                    <Heading>The Project Itself</Heading>

                </Slide>

                <Slide>
                    <Heading>I've Found A Bug!</Heading>
                </Slide>

                <Slide>
                    <Heading>Thank You!</Heading>
                </Slide>

            </Deck>
        );
    }
}

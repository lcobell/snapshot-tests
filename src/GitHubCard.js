import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import renderer from "react-test-renderer";

const GitHubCard = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="./logan.jpg" />
      <Card.Body>
        <Card.Title>Logan CoBell</Card.Title>
        <h3>Find me on GitHub at github.com/lcobell</h3>
        <Card.Text>
          My name is Logan CoBell and I am a Software Development student at Old
          Dominion University and Discovery Partners Institute. To fund this
          endeavor I bartend at RPM Steak in Chicago, Illinois. In my free time
          I enjoy running with my dogs, working out, and checking out Chicago's
          restaurant scene.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default GitHubCard;

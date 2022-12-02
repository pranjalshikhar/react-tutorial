import Button from "@mui/material/Button";

export const MuiButton = () => {
  return (
    <div>
      <Button variant="text">Text Button</Button>
      <div>
        <br />
      </div>
      <Button variant="contained">Contained Button</Button>
      <div>
        <br />
      </div>
      <Button variant="outlined">Outlined Button</Button>
      <div>
        <br />
      </div>
      <Button>Primary Button</Button>
      <div>
        <br />
      </div>
      <Button disabled>Diabled Button</Button>
      <div>
        <br />
      </div>
      <Button href="#button">Link Button</Button>
      <div>
        <br />
      </div>
      <Button variant="contained" disabled>
        Disabled Contained Button
      </Button>
      <div>
        <br />
      </div>
      <Button variant="contained" href="#contained-buttons">
        Link Contained Button
      </Button>
    </div>
  );
};

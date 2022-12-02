import { Typography } from "@mui/material";

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Sub Title 1</Typography>
      <Typography variant="subtitle2">Sub Title 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, rerum sed.
        Hic aliquid magnam autem molestiae minus quo alias asperiores impedit
        voluptatem tenetur cum, facere, expedita eum! Ea, facere doloremque.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui fugiat
        explicabo minus voluptatem, dolorum sed. Ducimus expedita voluptate
        aspernatur, reprehenderit maiores impedit quisquam quis repudiandae
        ipsam, assumenda consectetur nulla laborum.
      </Typography>
    </div>
  );
};

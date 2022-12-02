import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import { AppBar } from "../../layouts/AppBar";
import { PageHeading } from "../../layouts/ui/Text/PageHeading";
import { Artboard } from "./components/Artboard";

interface Collection {
  name: string;
  credit: {
    text: string;
    link: string;
  };
  images: {
    url: string;
  }[];
}

const gallery: Collection[] = [
  {
    name: "Girls Collection",
    credit: {
      text: "Woman Portrait Vectors by Vecteezy",
      link: "https://www.vecteezy.com/free-vector/woman-portrait",
    },
    images: [
      {
        url: "/profiles/girl-001.jpg",
      },
      {
        url: "/profiles/girl-002.jpg",
      },
      {
        url: "/profiles/girl-003.jpg",
      },
      {
        url: "/profiles/girl-004.jpg",
      },
      {
        url: "/profiles/girl-005.jpg",
      },
      {
        url: "/profiles/girl-006.jpg",
      },
      {
        url: "/profiles/girl-007.jpg",
      },
    ],
  },
];

export const ProfileGallery: NextPage = () => {
  return (
    <>
      <Head>
        <title>Choose your style.</title>
      </Head>
      <AppBar>
        <PageHeading>Choose your style</PageHeading>
        <Stack my={4} spacing={4}>
          {gallery.map((g, gIndex) => {
            return (
              <Stack spacing={1}>
                <Typography variant="h6" fontSize={16}>
                  {g.name}
                </Typography>
                <Typography variant="body2">
                  <Link
                    href={g.credit.link}
                    sx={{
                      fontSize: 10,
                    }}
                  >
                    {g.credit.text}
                  </Link>
                </Typography>
                <Grid container key={`container-${gIndex}`}>
                  {g.images.map((source, sIndex) => {
                    return (
                      <Grid
                        item
                        xs={4}
                        sm={3}
                        md={2}
                        key={`item-${gIndex}-${sIndex}`}
                      >
                        <Artboard {...source} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Stack>
            );
          })}
        </Stack>
      </AppBar>
    </>
  );
};

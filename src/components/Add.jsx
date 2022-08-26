import {
  Avatar,
  Box,
  Button,
  Fab,
  Modal,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import React from "react";
import AddIcon from "@mui/icons-material/Add";
import {EmojiEmotions,Image,VideoCameraBack} from "@mui/icons-material";
import { blue } from "@mui/material/colors";
function Add() {
  const [open, setOpen] = React.useState(false);

  const UserBox = styled(Box)({
    margin: "10px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  });

  return (
    <>
      <Tooltip
        onClick={() => setOpen(true)}
        sx={{
          position: "fixed",
          bottom: 20,
          right: {
            xs: "calc(50% - 20px)",
            md: 30,
          },
        }}
        title="Yeni Haber Ekle"
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <Modal
        open={open}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} borderRadius={5}   p={3} bgcolor={"background.default"} color={"text.primary"}>
          <Typography variant="h6" textAlign="center" color="gray">
            Yeni Haber Oluştur
          </Typography>
          <UserBox>
            <Avatar
              sx={{
                width: 30,
                height: 30,
              }}
              src="https://yt3.ggpht.com/yti/AJo0G0ndf-o7Q03FoWBOo8UnNLZzVeuHGsRDjWKv0IQqjQ=s88-c-k-c0x00ffffff-no-rj-mo"
            />
            <Typography fontWeight={500} variant="span">
              Yusuf Karaaslan
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            label="Haber İçeriği"
            sx={{
              width: "100%",
              margin: "10px 0",
            }}
            multiline
            rows={4}
            placeholder="Haber içeriğini giriniz..."
            variant="outlined"
          />

                <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1} mt={2} mb={3}>
                    <Box>
                    <EmojiEmotions color="primary"/>
                    <Image color="secondary"/>
                    <VideoCameraBack color="error"/>
                    </Box>
                    <Button color="primary" sx={{
                        backgroundColor: blue[500],
                        color: "white",
                    }}>Gönder</Button>
                </Stack>

        </Box>
      </Modal>
    </>
  );
}

export default Add;

'use client';

import { TextField, Button, Checkbox, FormControlLabel, Typography, Box, Paper } from '@mui/material';

export default function LoginPage() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url("26207098.jpg")', // publicフォルダに画像を置く
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper
        elevation={6}
        sx={{
          backdropFilter: 'blur(10px)',
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          padding: 4,
          borderRadius: 4,
          width: '100%',
          maxWidth: 400,
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" mb={2}>
          Q-botへログイン
        </Typography>

        <TextField
          fullWidth
          label="メールアドレス"
          margin="normal"
          variant="outlined"
        />
        <TextField
          fullWidth
          label="パスワード"
          margin="normal"
          type="password"
          variant="outlined"
        />
        <FormControlLabel control={<Checkbox />} label="サインインしたままにする" />

        <Button fullWidth variant="contained" sx={{ mt: 2 }}>
          サインイン
        </Button>

        <Box mt={2}>
          <Typography variant="body2" color="primary">
            メールアドレス またはパスワードをお忘れですか？
          </Typography>
          <Typography variant="body2">
            アカウント をお持ちでないですか？ 今すぐ作成。
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import ThemeToggle from '@/components/ThemeToggle';
import ThreeColumnLayout from '@/components/ThreeColumnLayout';
import Header from '@/components/Header';
import Logo from '@/components/Logo';
import { LeftSidebar } from '@/components/LeftSidebar';

export default function Home() {
  return (
    <Box sx={{ p: 0, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <ThreeColumnLayout
        headerComponent={
          <Header 
            title="Zenemig"
            logo={<Logo width={40} />}
            actions={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <ThemeToggle />
              </Box>
            }
          />
        }
        leftColumn={
          <LeftSidebar />
        }
        middleColumn={
          <Paper 
            sx={{ 
              p: 2,
              borderRadius: 0,
              height: '100%',
            }}
            elevation={0}
          >
            <Typography variant="h3" component="h1" gutterBottom>
              Welcome to Zenemig
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              A Next.js Project with MUI and TypeScript
            </Typography>
            <Typography variant="body1" paragraph>
              This is the main content area. It is always visible and resizes based on device size.
            </Typography>
            <Typography variant="body1" paragraph>
              On mobile devices, it takes up the full width.
              On tablets, it shares space with the left column.
              On desktops, it sits between the left and right columns.
            </Typography>
          </Paper>
        }
        rightColumn={
          <Paper 
            sx={{ 
              p: 2, 
              height: '100%',
              borderRadius: 0, 
            }}
            elevation={0}
          >
            <Typography variant="h5" component="h2" gutterBottom>
              Right Column
            </Typography>
            <Typography variant="body2" paragraph>
              This right column is only visible on desktop devices.
            </Typography>
            <Typography variant="body2">
              This area might contain additional information, ads, or related content.
            </Typography>
          </Paper>
        }
      />
    </Box>
  );
}

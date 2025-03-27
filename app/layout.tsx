import { mantineHtmlProps, MantineProvider } from '@mantine/core';
import { createMantineTheme, latoFont } from '../config/mantine.config';

import '@mantine/core/styles.css';
import '../styles/reset.css';
import { RootTemplate } from '../components/RootTemplate';

interface Props {
  children: React.ReactNode;
}

const AppLayout = async ({ children }: Props) => {
  const mantineTheme = createMantineTheme();

  return (
    <html {...mantineHtmlProps} className={latoFont.variable}>
      <body>
        <MantineProvider theme={mantineTheme}>
            <RootTemplate>
                {children}
            </RootTemplate>
        </MantineProvider>
      </body>
    </html>
  );
};

export default AppLayout;

import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { FaClock, FaHeart, FaTag } from 'react-icons/fa';

import DevBadge from '@/components/badges/dev-badge';
import ClientCard from '@/components/cards/client-card';
import { WorkCard } from '@/components/cards/work-card';
import AutoScroll from '@/components/content/auto-scroll';
import Section from '@/components/content/section';
import SectionTitle from '@/components/content/section/title';
import CLIENTS from '@/config/clients';
import CURRENTLY from '@/config/currently';
import SKILLS from '@/config/skills';
import useGTM from '@/hooks/useGTM';
import useScreen from '@/hooks/useScreen';

export default function Home() {
  const screen = useScreen();
  const isSmall = screen == 'tablet' || screen == 'mobile';

  const time = useGTM(-3);

  return (
    <Flex
      alignItems={'center'}
      justifyContent={'center'}
      flexDir={'column'}
      gap={'20px'}
      width={'100%'}
      mt={'25px'}
    >
      {/* Avatar */}
      <Image
        alt="Raccoons's GitHub avatar"
        src={'https://avatars.githubusercontent.com/u/29274375?v=4'}
        borderRadius={'50%'}
        width={'10vw'}
      />

      {/* Greetings */}
      <Heading size={isSmall ? '2xl' : '4xl'}>Welcome! I&apos;m >/Raccoon/</Heading>
      <Heading size={isSmall ? 'xl' : '2xl'} color={'inherit'}>
        An Aspiring Programmer
      </Heading>

      {/* Brief */}
      <Flex
        mt={'50px'}
        w={'95%'}
        maxWidth={'720px'}
        justifyContent={'space-between'}
        fontFamily={'rainyhearts'}
        userSelect={'none'}
        gap={'10px'}
      >
        {/* Time */}
        <Section p={'10px 20px'} alignItems={'center'} gap={'7px'} orbit>
          <FaClock size={'15px'} /> {time}
        </Section>

        {/* Pronouns */}
        <Section p={'10px 20px'} alignItems={'center'} gap={'7px'} orbit>
          <FaTag size={'15px'} /> Øbscure.
        </Section>

        {/* Tag */}
        <Section p={'10px 20px'} alignItems={'center'} gap={'7px'} orbit>
          <FaHeart size={'15px'} /> xNTP
        </Section>
      </Flex>

      {/* About me */}
      <Section p={'10px 20px'} flexDir={'column'} maxWidth={'95%'} orbit={25}>
        <SectionTitle icon="/assets/icons/cinnamon.png">About me</SectionTitle>

        <Text
          maxWidth={'700px'}
          letterSpacing={'1px'}
          fontWeight={'hairline'}
          opacity={'.8'}
        >
          I&lsquo;m an aspiring programmer with interests in Python, Rust, Go, C#, Kotlin and TypeScript. My hobbies are gaming, coffee, and Twitch. I also love to listen to hardwave/wave music while working or playing games. Late night enthusiast. ⸸
        </Text>
      </Section>

      {/* Socials */}
      <Flex flexDir={'column'} alignItems={'center'} gap={'20px'} mt={'70px'}>
        <Heading color={'inherit'} size={'lg'}>
          My Socials
        </Heading>

        <AutoScroll>
          {CLIENTS.map((c, i) => (
            <ClientCard key={i} {...c} />
          ))}
        </AutoScroll>
      </Flex>

      {/* Skills */}
      <Flex flexDir={'column'} alignItems={'center'} gap={'20px'} mt={'70px'}>
        <Heading color={'inherit'} size={'lg'}>
          Skills
        </Heading>

        {SKILLS.map((group, i) => (
          <Section
            key={i}
            p={'10px 20px'}
            flexDir={'column'}
            maxWidth={'700px'}
            width={'95%'}
            orbit={25}
          >
            <Heading color={'inherit'} size={'lg'}>
              {group.title}
            </Heading>

            <Box width={'100%'} mt={'10px'}>
              {group.skills.map((skill, j) => (
                <DevBadge key={j}>{skill}</DevBadge>
              ))}
            </Box>
          </Section>
        ))}
      </Flex>

      {/* Currently working on */}
      <Flex
        flexDir={'column'}
        alignItems={'center'}
        gap={'20px'}
        my={'70px'}
        maxW={'95%'}
      >
        <Heading color={'inherit'} size={'lg'}>
          Currently working on
        </Heading>

        {CURRENTLY.map(({ description, ...work }, i) => (
          <WorkCard key={i} {...work}>
            {description}
          </WorkCard>
        ))}
      </Flex>
    </Flex>
  );
}

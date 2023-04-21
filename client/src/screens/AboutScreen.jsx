import { Box, Table, Tr, Th, Td, Stack, Image, Flex } from "@chakra-ui/react";

const AboutScreen = () => {
  return (
    <Box minH="100vh" m="15">
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={{ base: "10", lg: "20" }}
        alignContent="center"
        justifyItems="center"
      >
        <Table>
          <Tr>
            <Th fontSize="md" minW="150px">
              自我簡介
            </Th>
            <Td>
              <p>
                大學就讀三類組的醫學檢驗暨生物技術學系，喜歡研究在生命中遇到引起自己興趣的事物，程式語言也是其中之一，多年觀察下來，知道自己是一個容易受到環境影響的人，因此會審慎的選擇自己的環境。
              </p>
              <p>
                常常會為了學會一件事情，把自己丟到一個絕非舒適圈，但是卻能夠讓我學會技能的地方，最後結果通常令人滿意且有成就感。
              </p>
              <p>
                是一個務實的人，如果流程可以簡單化，就不要搞得複雜。隨著科技越來越發達，幾乎各行各業都需要 IT
                部門的存在，很喜歡軟體工程師這個產業的平行文化和分享文化，只有一直堆疊技術，才不會閉門造車，才能進步。
              </p>
            </Td>
          </Tr>
          <Tr>
            <Th fontSize="md" minW="150px">
              學歷
            </Th>
            <Td>中國醫藥大學 醫學檢驗暨生物技術學系 學士</Td>
          </Tr>
          <Tr>
            <Th fontSize="md" minW="150px">
              經歷
            </Th>
            <Td>
              <ol>
                <li>動保處研究助理</li>
                <li>臨床醫檢師</li>
                <li>台大動科研究助理</li>
                <li>臨床醫檢師</li>
                <li>獨木舟教練</li>
                <li>游泳教練</li>
              </ol>
            </Td>
          </Tr>
          <Tr>
            <Th fontSize="md" minW="150px">
              語言
            </Th>
            <Td>
              <ul>
                <li>中文：精通</li>
                <li>英文：日常、旅行用語</li>
              </ul>
            </Td>
          </Tr>
          <Tr>
            <Th fontSize="md" minW="150px">
              程式語言
            </Th>
            <Td>
              <Flex direction="row" spacing="5px">
                <Image maxW="50px" src="/images/html.svg" alt="HTML5" />
                <Image maxW="50px" src="/images/css.svg" alt="CSS3" />
                <Image maxW="50px" src="/images/python.svg" alt="Python" />
                <Image maxW="50px" src="/images/JS.svg" alt="JS" />
                <Image maxW="50px" src="/images/react.svg" alt="react" />
              </Flex>
            </Td>
          </Tr>
          <Tr>
            <Th fontSize="md" minW="150px">
              開發和學習經驗
            </Th>
            <Td>
              <ul>
                <li>
                  <a href="https://lenzolu.netlify.app/">靜態網站：</a>
                  個人簡介頁面、台灣經濟發展歷史網站、夏威夷旅遊租借網站，從構想、用Figma畫出網站架構、使用者介面UI/UX設計、HTML做出基本網頁架構、CSS將網頁前端美化以及提升以及提使用外觀。
                </li>
                <li>
                  動態網站：使用 React 架構下，製作需要的 Components，Server 連結 MongoDB，並且使用 Redux 追蹤，部署到
                  onrender 網站。
                </li>
              </ul>
            </Td>
          </Tr>
        </Table>

        <Image
          borderRadius="10px"
          src="/images/about.jpg"
          maxW="30vw"
          maxH="70vh"
          alt="Cola with Me"
          objectFit="cover"
          flex="1"
        />
      </Stack>
    </Box>
  );
};

export default AboutScreen;

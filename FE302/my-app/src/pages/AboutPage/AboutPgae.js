import React from "react";
import styled from "styled-components";

export default function name(params) {
  const Root = styled.div`
    font-family: "Times New Roman", Times, serif;
    width: 70%;
    margin: 0 auto;
    padding: 40px;
    border: 1px solid black;
    border-radius: 8px;
    background-color: rgba(0, 0, 0, 0.7);
  `;
  const PageTitle = styled.div`
    color: white;
    font-size: 50px;
    font-weight: bold;
    padding: 20px;
    padding-top: 0;
    border-bottom: 1px solid white;
  `;
  const ContentTitle = styled.div`
    color: white;
    font-size: 30px;
    font-weight: bold;
    padding: 20px;
  `;
  const Content = styled.div`
    color: lightgray;
    font-size: 18px;
    padding-left: 20px;
  `;

  return (
    <Root>
      <PageTitle>About this blog</PageTitle>
      <ContentTitle>Author</ContentTitle>
      <Content>
        "Walter Chang, Neque porro quisquam est qui dolorem ipsum quia dolor sit
        amet, consectetur, adipisci velit..."
        <br />
        "There is no one who loves pain itself, who seeks after it and wants to
        have it, simply because it is pain..."
      </Content>
      <ContentTitle>The art of visual storytelling</ContentTitle>
      <Content>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget
        lectus quis sapien elementum tincidunt ut quis metus. Nulla facilisi.
        Nulla eget enim ut lacus tempus sagittis. Proin imperdiet erat eu neque
        pretium rutrum. Donec varius nisi ut lectus auctor sodales. Ut at arcu
        ut orci tincidunt aliquam vitae eget lacus. Nam tincidunt lorem libero,
        eget blandit dolor aliquet eu. Morbi ac massa viverra dui auctor
        commodo. Donec purus magna, accumsan id aliquam non, faucibus a sapien.
        Integer sodales convallis purus sed fermentum.
      </Content>
      <ContentTitle>5 Things we value</ContentTitle>
      <Content>
        Quisque pretium nunc vel congue elementum. Maecenas vitae nibh at est
        fermentum dapibus. Quisque non augue aliquet, lacinia neque aliquet,
        iaculis sem. Nunc faucibus ultricies viverra. Nullam et magna vulputate,
        placerat enim sit amet, hendrerit est. Morbi consequat arcu vestibulum
        purus tempus, vitae semper ligula aliquet. Donec id nisi neque. Cras
        pharetra lacinia libero. Phasellus eu varius diam. Fusce quis quam sed
        tortor placerat dignissim et sed lectus. In ut lacus eu tortor lobortis
        faucibus. Curabitur nec tortor non mi elementum rhoncus venenatis id
        arcu. In fringilla leo in auctor pellentesque.
      </Content>
      <ContentTitle>What makes this blog different?</ContentTitle>
      <Content>
        Integer euismod felis in pulvinar dapibus. Cras pulvinar arcu sed mi
        congue faucibus. Proin mattis vestibulum libero, in blandit turpis
        tincidunt eget. Ut fringilla ullamcorper rhoncus. Donec eget mollis est,
        sed rhoncus tellus. Etiam nec augue at nisi aliquam gravida sed non
        ante. Proin blandit justo vel vestibulum posuere. Aliquam vestibulum
        ipsum quis nibh congue molestie. Nam nunc felis, congue nec aliquam
        eget, iaculis ac libero. Vivamus malesuada nec erat eget ultrices.
        Suspendisse sapien magna, porttitor sed convallis eu, sagittis id enim.
        Praesent placerat posuere lorem sit amet pellentesque. Nulla convallis
        non diam ac ornare. Interdum et malesuada fames ac ante ipsum primis in
        faucibus. Suspendisse efficitur ligula metus, in ultricies erat
        scelerisque at. Fusce pellentesque, ipsum at sollicitudin ullamcorper,
        tellus lectus cursus est, quis venenatis ex erat vitae sem.
      </Content>
    </Root>
  );
}

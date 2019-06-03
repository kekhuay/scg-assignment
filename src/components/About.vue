<template>
  <div class="about-container">
    <b-container>
      <b-jumbotron header="About Me" lead="This page is all about me" class="text-center"></b-jumbotron>

      <div>
        <b-card no-body class="overflow-hidden">
          <b-row no-gutters>
            <b-col md="2">
              <b-card-img :src="myImage" class="rounded-0"></b-card-img>
            </b-col>
            <b-col md="10" class="about-section">
              <b-card-body title="Natthaphon Phanit">
              <b-card-sub-title class="mb-2">Senior Engineer at Ascend Corporation</b-card-sub-title>
              <b-card-sub-title class="mb-2">Born 03 April 1989 ({{ age }} years old)</b-card-sub-title>
                <b-card-text>
                  My name is Natthaphon Phanit. I am an experienced Software Engineer with a demonstrated history of working in the computer software industry since 2013.
                  I am strong engineering professional skilled in web application development with modern technology.
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>

      <div role="tablist" class="clearfix about-card">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.work-experience variant="info">
              <font-awesome-icon icon="briefcase" size="lg" />
              Work Experience
            </b-button>
          </b-card-header>
          <b-collapse id="work-experience" accordion="my-accordion" role="tabpanel">
            <b-card-body class="about-section">
              <b-list-group flush>
                <b-list-group-item class="about-section">
                  <b-card title="Ascend Corporation" title-tag="h5">
                    <b-card-sub-title class="mb-2">Senior Engineer</b-card-sub-title>
                    <b-card-sub-title class="mb-2">Nov 2018 – Present</b-card-sub-title>
                    <b-card-text>
                      <ul>
                        <li>Perform coding duties within a specified timeframe</li>
                        <li>Perform system testing, implementation and modification</li>
                        <li>Troubleshooting and debugging applications when there are any issues</li>
                      </ul>
                    </b-card-text>
                  </b-card>
                </b-list-group-item>
                <b-list-group-item class="about-section">
                  <b-card title="Allianz Technology" title-tag="h5">
                    <b-card-sub-title class="mb-2">Java Developer</b-card-sub-title>
                    <b-card-sub-title class="mb-2">Nov 2017 – Oct 2018</b-card-sub-title>
                    <b-card-text>
                      <ul>
                        <li>Perform coding duties within a specified timeframe</li>
                        <li>Provide assistance with software support and troubleshooting through interaction with the customer</li>
                        <li>Maintain proper coding practices and documentation, even under deadlines</li>
                        <li>Collaborate with business analysts and developers to produce software designs</li>
                      </ul>
                    </b-card-text>
                  </b-card>
                </b-list-group-item>
                <b-list-group-item class="about-section">
                  <b-card title="Genius-Tree Co., Ltd." title-tag="h5">
                    <b-card-sub-title class="mb-2">Full Stack developer</b-card-sub-title>
                    <b-card-sub-title class="mb-2">Sep 2015 – Aug 2017</b-card-sub-title>
                    <b-card-text>
                      <ul>
                        <li>Executing full lifecycle software development</li>
                        <li>Programming well-designed, testable, efficient code</li>
                        <li>Transforming software designs and specifications into high functioning code in the appropriate language</li>
                        <li>Develops software solutions by studying information needs; conferring with users; studying systems flow, data usage, and work processes; investigating problem areas; following the software development lifecycle</li>
                      </ul>
                    </b-card-text>
                  </b-card>
                </b-list-group-item>
                <b-list-group-item class="about-section">
                  <b-card title="Inspektion Co., Ltd." title-tag="h5">
                    <b-card-sub-title class="mb-2">Python Developer</b-card-sub-title>
                    <b-card-sub-title class="mb-2">2013 – 2015</b-card-sub-title>
                    <b-card-text>
                      <ul>
                        <li>Programming well-designed, testable, efficient code</li>
                        <li>Transforming software designs and specifications into high functioning code in the appropriate language</li>
                        <li>Perform system testing, implementation and modification</li>
                      </ul>
                    </b-card-text>
                  </b-card>
                </b-list-group-item>
              </b-list-group>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <div role="tablist" class="clearfix about-card">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.education variant="info">
              <font-awesome-icon icon="graduation-cap" size="lg" />
              Education
            </b-button>
          </b-card-header>
          <b-collapse id="education" accordion="my-accordion" role="tabpanel" class="about-section">
            <b-card-body title="Ramkhamhaeng University">
              <b-row>
                <b-col>Degree</b-col>
                <b-col cols="10">Bachelor of Science (B.S.)</b-col>
              </b-row>
              <b-row>
                <b-col>Field of study</b-col>
                <b-col cols="10">Computer Science</b-col>
              </b-row>
              <b-row>
                <b-col>Grade</b-col>
                <b-col cols="10">3.02</b-col>
              </b-row>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <div role="tablist" class="clearfix about-card">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.certificates variant="info">
              <font-awesome-icon icon="certificate" size="lg" />
              Certification
            </b-button>
          </b-card-header>
          <b-collapse id="certificates" accordion="my-accordion" role="tabpanel">
            <b-card-body class="about-section">
              <b-list-group flush>
                <b-list-group-item class="about-section">
                  <b-card title="Practical Data Analytics Using Rapid Miner" title-tag="h5">
                    <b-card-sub-title class="mb-2">Chulalongkorn University</b-card-sub-title>
                    <b-card-sub-title class="mb-2">Issued Apr 2019 No Expiration Date</b-card-sub-title>
                  </b-card>
                </b-list-group-item>
                <b-list-group-item class="about-section">
                  <b-card title="Oracle Certified Expert, Java EE 6 Java Persistence API Developer" title-tag="h5">
                    <b-card-sub-title class="mb-2">Oracle</b-card-sub-title>
                    <b-card-sub-title class="mb-2">Issued Jun 2017No Expiration Date</b-card-sub-title>
                    <b-card-sub-title class="mb-2">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.youracclaim.com/badges/def85425-8656-47c3-9a70-ba4671413f82">See credential</a>
                    </b-card-sub-title>
                  </b-card>
                </b-list-group-item>
                <b-list-group-item class="about-section">
                  <b-card title="Oracle Certified Professional, Java SE 8 Programmer" title-tag="h5">
                    <b-card-sub-title class="mb-2">Oracle</b-card-sub-title>
                    <b-card-sub-title class="mb-2">Issued Sep 2016 No Expiration Date</b-card-sub-title>
                    <b-card-sub-title class="mb-2">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.youracclaim.com/badges/cad2fdeb-bbe1-45e7-8cb6-1b8ba1e01f3a">See credential</a>
                    </b-card-sub-title>
                  </b-card>
                </b-list-group-item>
                <b-list-group-item class="about-section">
                  <b-card title="Oracle Certified Associate, Java SE 8 Programmer" title-tag="h5">
                    <b-card-sub-title class="mb-2">Oracle</b-card-sub-title>
                    <b-card-sub-title class="mb-2">Issued Feb 2016 No Expiration Date</b-card-sub-title>
                    <b-card-sub-title class="mb-2">
                      <a target="_blank" rel="noopener noreferrer" href="https://www.youracclaim.com/badges/570d39fb-26f7-417d-8bbe-22caf024f764">See credential</a>
                    </b-card-sub-title>
                  </b-card>
                </b-list-group-item>
              </b-list-group>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>

      <div role="tablist" class="clearfix about-card">
        <b-card no-body class="mb-1">
          <b-card-header header-tag="header" class="p-1" role="tab">
            <b-button block href="#" v-b-toggle.contact variant="info">
              <font-awesome-icon icon="address-card" size="lg" />
              Contact
            </b-button>
          </b-card-header>
          <b-collapse id="contact" accordion="my-accordion" role="tabpanel">
            <b-card-body class="about-section">
              <b-list-group>
                <b-list-group-item class="contact-item">
                  <font-awesome-icon icon="envelope" size="lg" />
                  nulladivides@protonmail.com
                </b-list-group-item>
                <b-list-group-item class="contact-item">
                  <font-awesome-icon icon="mobile-alt" size="lg" />
                  +66906783628
                </b-list-group-item>
                <b-list-group-item class="contact-item">
                  <font-awesome-icon :icon="['fab', 'linkedin']" size="lg" />
                  linkedin.com/in/natthaphon-p-b75020b8
                </b-list-group-item>
                <b-list-group-item class="contact-item">
                  <font-awesome-icon :icon="['fab', 'github']" size="lg" />
                  github.com/kekhuay
                </b-list-group-item>
                <b-list-group-item class="contact-item">
                  <font-awesome-icon :icon="['fab', 'stack-overflow']" size="lg" />
                  stackoverflow.com/users/3905564/kekhuay
                </b-list-group-item>
              </b-list-group>
            </b-card-body>
          </b-collapse>
        </b-card>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'About',
  computed: {
    age() {
      return this.$moment().diff(this.$store.state.birthDate, 'years');
    },
    myImage() {
      return require('../assets/images/my-image.jpeg');
    }
  }
}
</script>

<style lang="sass" scoped>
  .about-container
    margin-top: 64px;
    margin-bottom: 64px;
  .about-card
    margin-top: 8px;
  .about-section
    background-color: aliceblue;
  .contact-item
    &:hover
      background-color: antiquewhite;
</style>


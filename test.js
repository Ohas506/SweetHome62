e = campaignTrail_temp;

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_title = "#565d8f";

            nct_stuff.themes[nct_stuff.selectedTheme].coloring_window = "#eef0f6";

            document.getElementsByClassName("game_header")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_title;

            $("#game_window")[0].style.backgroundColor = nct_stuff.themes[nct_stuff.selectedTheme].coloring_window;

            $(".container")[0].style.backgroundColor = "#393e60";

            document.getElementById("header").src = "https://i.imgur.com/i5JPvBV.png";

            document.body.background = "../static/images/mlk.jpg";

            e.election_json = [{"model":"campaign_trail.election","pk":11,"fields":{"year":1960,"summary":"<div style='overflow-y:scroll;height:200px;'>As Wallace lay defeated in 1958, broken by the southern machine that had done nothing to raise Alabama from its status as a \"Dead last State\", nothing shall stop him from taking power now.<br><br>While Wallace used to be a \"Racial Moderate\", favoring gradual emancipation since his time as a judge treating both blacks and whites fairly, the support of the NAACP to his campaign 4 years ago where no use faced with the candidate of the Klu Klux Klan.<br><br>Now, if he was to become anyone, to be able to do anything, he had to do everything to get to the governor's house.<br><br>For what was hell paved out of if but from good intention?</div>","image_url":"https://i.imgur.com/WKRI1Mm.png","winning_electoral_vote_number":270,"advisor_url":"https://pbs.twimg.com/profile_images/2967348285/673721d1e5f71c26c0dcbfc9e0c4c936_400x400.jpeg","recommended_reading":"<ul>\n<li><a href=https://www.chicagotribune.com/opinion/editorials/ct-edit-chicago-tribune-biden-endorsement-20200925-lnyxsb5qvrftnjjmj3rnzj33jy-story.html>Our Case For Joe Biden</a></li>\n<li><a href=https://nationalinterest.org/feature/case-trump-166808>The Case For Trump</a></li>\n<li><a href=https://www.npr.org/2020/11/18/935730100/how-biden-won-ramping-up-the-base-and-expanding-margins-in-the-suburbs>How Biden Won: Ramping Up The Base And Expanding Margins In The Suburbs</a></li>\n<li><a href=https://www.prospectmagazine.co.uk/politics/donald-trump-joe-biden-us-election-almost-win-votes-concede>Why Did Trump Almost Win?</a></li>\n<li><a href=https://www.hoover.org/research/no-evidence-voter-fraud-guide-statistical-claims-about-2020-election>No Evidence For Voter Fraud: A Guide To Statistical Claims About The 2020 Election</a></li>\n</ul>","has_visits":0,"no_electoral_majority_image":"../static/images/2012-no-majority.jpg"}}];e.temp_election_list = [{"id":11,"year":1960,"is_premium":0,"display_year":"1962 - Sweet home"}];e.credits = "Ulric Morningstar";e.global_parameter_json = [{"model":"campaign_trail.global_parameter","pk":1,"fields":{"vote_variable":1.125,"max_swing":0.12,"start_point":0.94,"candidate_issue_weight":10,"running_mate_issue_weight":3,"issue_stance_1_max":-0.71,"issue_stance_2_max":-0.3,"issue_stance_3_max":-0.125,"issue_stance_4_max":0.125,"issue_stance_5_max":0.3,"issue_stance_6_max":0.71,"global_variance":0.01,"state_variance":0.005,"question_count":25,"default_map_color_hex":"#C9C9C9","no_state_map_color_hex":"#999999"}}];e.candidate_json = [{"model":"campaign_trail.candidate","pk":1001,"fields":{"first_name":"George Corley","last_name":"Wallace","election":11,"party":"Alabama Democratic Party","state":"Barbour","priority":1,"description":"<div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'><div style='overflow-y:scroll;height:200px;'>There are few men that have had bigger burning ambition than George Wallace.<br><br>A judge by trade, from his time as delegate in 1948 to his first run in 1958, he had become both an anti establishment candidate in the one party state of the deep south as well as a populist. Having refused to support the Dixiecrat secession from the democratic convention against Truman and having gained the reputation as a judge which was both fair and Respectful to blacks, what was to stop him from gaining the governorship?<br><br>He had been beaten. Having spoken out against the Klan terrorist activities, he had no chance to succeed against hardline segregationist John M. Patterson.<br><br>4 Years later, he was once again running for the governorship. When he talked about good roads and good schools and all those things that have been part of his career, nobody listened. When he shall talk about blacks, they will stomp the floor.</div></div></div></div></div></div>","color_hex":"#474e85","secondary_color_hex":null,"is_active":1,"image_url":"https://i.imgur.com/MXwdV2s.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":true}},{"model":"campaign_trail.candidate","pk":1002,"fields":{"first_name":"Eugene \"Bull\"","last_name":"Connor ","election":11,"party":"Democrat Party","state":"Dallas","priority":1,"description":"Dummy Example is a veteran from Hell. He loves puppies and magic! Dummy Example will unite America!<br><br>New line<br><br>This is <b>bold</b> and this <i>italic</i>!","color_hex":"#fff93d","secondary_color_hex":null,"is_active":0,"image_url":"https://i.imgur.com/MQbp2Xk.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":1003,"fields":{"first_name":"Frank P. ","last_name":"Walls","election":11,"party":"Independant","state":"","priority":1,"description":"","color_hex":"#919191","secondary_color_hex":null,"is_active":0,"image_url":"","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":null,"candidate_score":1,"running_mate":false,"scrollable":false}},{"model":"campaign_trail.candidate","pk":1004,"fields":{"first_name":"Democratic party","last_name":"Of Alabama","election":11,"party":"Democratic party","state":"Nationwide","priority":1,"description":"<div style='overflow-y:scroll;height:200px;'>To say that the democratic party of Alabama as nothing democratic about it would be stating plain facts.<br><br>Since the end of reconstruction and the near total disenfranchisement of all blacks in the state, the party has run functionally unopposed for nearly a century. Champion of the status quo, white interest and the continued domination of White on the segregated blacks, it was only with the walkout of 48 that things began to change.<br><br>The party has since become divided between progressivist, racial moderates and the hard line segregationist. No other party having any influence in the state, this has turned this party into a truly cutthroat institution where each and every member backstab and double cross their neighbor to gain power for themselves.<br><br>As a result of it, the perfectly dysfunctional institution is finally beginning to show cracks as the segregationist party took back control in 1958. If anything was to improve in the state so long seen as the least of the 50 states, decisive direction needs to be taken.</div>","color_hex":"#0000ff","secondary_color_hex":null,"is_active":0,"image_url":"https://i.imgur.com/WpakIM8.png","electoral_victory_message":"<h3>REAL PATRIOT DUMMY EXAMPLE SWEEPS</h3>","electoral_loss_message":"<h3>Fake News?</h3>","no_electoral_majority_message":"<h3>DUMMY EXAMPLE RETURNS TO HELL</h3>","description_as_running_mate":"<div style='overflow-y:scroll;height:200px;'>To say that the democratic party of Alabama as nothing democratic about it would be stating plain facts.<br><br>Since the end of reconstruction and the near total disenfranchisement of all blacks in the state, the party has run functionally unopposed for nearly a century. Champion of the status quo, white interest and the continued domination of White on the segregated blacks, it was only with the walkout of 48 that things began to change.<br><br>The party has since become divided between progressivist, racial moderates and the hard line segregationist. No other party having any influence in the state, this has turned this party into a truly cutthroat institution where each and every member backstab and double cross their neighbor to gain power for themselves.<br><br>As a result of it, the perfectly dysfunctional institution is finally beginning to show cracks as the segregationist party took back control in 1958. If anything was to improve in the state so long seen as the least of the 50 states, decisive direction needs to be taken.</div>","candidate_score":1,"running_mate":true,"scrollable":false,"partner":"0"}}];e.running_mate_json = [{"model":"campaign_trail.running_mate","pk":2001,"fields":{"candidate":1001,"running_mate":1004}}];

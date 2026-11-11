/* User-facing copy for the onboarding journey.
   Source data (roles, motivations, welcome slides, flows, JTBD) is in data.js.
   This file adds what the onboarding needs on top: the checklist wording, the
   outcome after each job, and the coach-mark text for every flow step. */
(function () {
  const ROLES = {
    student: { label: "Student", phrase: "a student", accent: "#b61855" },
    educator: { label: "Educator", phrase: "an educator", accent: "#e8af1b" },
    parent: { label: "Parent", phrase: "a parent", accent: "#17936a" },
    university: { label: "University student", phrase: "a university student", accent: "#3792f2" },
    lecturer: { label: "Lecturer", phrase: "a lecturer", accent: "#12a9e6" },
    other: { label: "Other", phrase: "a creator", accent: "#2b398f" }
  };

  /* What the user is making, per motivation (index matches data.js). */
  const NOUN = {
    student: ["assignment", "assessment", "competition entry", "first project", "project", "project"],
    educator: ["lesson", "lesson", "assessment", "lesson", "lesson", "lesson"],
    parent: ["child's assignment", "project", "project", "project", "first project", "project"],
    university: ["assignment", "research", "assessment", "competition entry", "first project", "project"],
    lecturer: ["research", "training project", "class project", "program", "project", "project"],
    other: ["3D/AR experience", "learning content", "project", "community project", "first project", "personal project", "project"]
  };

  /* Who will see the work. */
  const AUDIENCE = {
    student: ["your teacher", "your teacher", "the judges", "your friends", "your friends", "your friends"],
    educator: ["your students", "your students", "the assessors", "your students", "your students", "your students"],
    parent: ["your child's teacher", "your family", "your family", "your family", "your family", "your family"],
    university: ["your lecturer", "your examiners", "your lecturer", "the judges", "your friends", "your audience"],
    lecturer: ["your colleagues", "the educators you train", "your students", "your students", "your colleagues", "your audience"],
    other: ["your audience", "your learners", "your clients", "your community", "your friends", "your friends", "your audience"]
  };

  const CHECKLIST_TITLE = {
    student: "Your first steps",
    educator: "Get your class ready",
    parent: "Your first steps together",
    university: "Your first steps",
    lecturer: "Your first steps",
    other: "Your first steps"
  };

  /* Checklist jobs. They describe what the user gets, in their words, and name
     the feature only as the way to get there. Key: role:motivation:slide.
     Slides 2 and 3 fall back to role:*:slide. */
  const JOBS = {
    "student:0:0": ["Bring your class project to life in 3D", "Build it your way in the Editor, then hold it in your hand with AR."],
    "student:1:0": ["Show what you know in 3D", "Build an assessment project that's easy to explain and hard to forget."],
    "student:2:0": ["Make an entry the judges remember", "Build your idea in 3D, then let people walk around it in AR."],
    "student:3:0": ["Make your very first 3D/AR project", "Start from a blank scene and finish with something you can share."],
    "student:4:0": ["Explore real 3D, right in your room", "Pick a ready-to-use project in Edu Kits and see it come alive in AR."],
    "student:5:0": ["Turn your idea into a 3D/AR project", "Build it in the Editor, then see it in AR on your own phone."],
    "student:*:1": ["Make a game your friends will want to play", "Snap Visual Coding blocks together to make objects move, react, and score."],
    "student:*:2": ["Build it together with your classmates", "Invite your team with Collaborate and work on the same project at the same time."],

    "educator:0:0": ["Teach today's lesson with ready-to-use 3D slides", "Pick your subject in Topic and present learning slides your class can explore."],
    "educator:0:1": ["Add ready-to-use 3D/AR to your lesson plan", "Find a project for your subject in Edu Kits and use it in class today."],
    "educator:1:0": ["Help students see what they're learning", "Turn your lesson idea into 3D in the Editor, using ready-to-use objects."],
    "educator:1:1": ["Put your lesson in every student's hands", "Show it on screen, or share a link students open on their phones."],
    "educator:2:0": ["Build a 3D/AR task for your assessment", "Give students something to explore, explain, and be assessed on."],
    "educator:2:1": ["Let assessors explore the work in 3D/AR", "Share one link they can open in 3D or AR on their own phones."],
    "educator:3:0": ["Bring 3D/AR into your class in minutes", "Start with a ready-to-use project from Edu Kits. No setup needed."],
    "educator:3:1": ["Let every student explore it up close", "Show it on screen, or share a link students open on their phones."],
    "educator:4:0": ["Build your first 3D lesson and learn as you go", "Each step teaches you one part of the Editor, at your own pace."],
    "educator:4:1": ["Present your lesson so every student can explore it", "Show it on screen, or share a link students open on their phones."],
    "educator:5:0": ["Create 3D/AR for the subject you teach", "Start with ready-to-use 3D objects in the Editor and make them yours."],
    "educator:5:1": ["Present your lesson so every student can explore it", "Show it on screen, or share a link students open on their phones."],
    "educator:*:2": ["Keep your class's work in one place", "Use Class to share materials, give assignments, and see every student's project."],

    "parent:0:0": ["Help your child bring their assignment to life", "Build it together in the Editor, then see it in AR at home."],
    "parent:1:0": ["Make hard topics easier to understand together", "Explore the solar system, a cell, or a volcano in Edu Kits with your child."],
    "parent:2:0": ["Turn learning time into play time", "Drag 3D objects into the Editor together, then see them in your room."],
    "parent:3:0": ["Cheer on your child's first creation", "Your child builds in the Editor and you guide. Finish with something to share."],
    "parent:4:0": ["Discover 3D and AR together", "Build your first project side by side, then view it in AR."],
    "parent:5:0": ["Create something together in 3D", "Build a project with your child in the Editor, then view it in AR."],
    "parent:*:1": ["Make a game together, one block at a time", "Snap Visual Coding blocks together to make objects move, react, and score."],
    "parent:*:2": ["Turn your child's drawing into 3D", "Upload a photo of their drawing and watch AI-3D Generation make it 3D."],

    "university:0:0": ["Make your assignment pop off the page", "Build it in the Editor, then show it on a printed Custom Marker."],
    "university:1:0": ["Present your research in 3D/AR", "Let your examiners see your findings appear on a printed page."],
    "university:2:0": ["Make your assessment easy to see and explain", "Build it in 3D, then show it in AR on a Custom Marker."],
    "university:3:0": ["Give judges something to hold and explore", "Build your entry, then show it on a poster or card with Custom Marker."],
    "university:4:0": ["Create your first 3D/AR project on a real page", "Learn the Editor, then see your work appear on a Custom Marker."],
    "university:5:0": ["Bring your idea off the screen", "Build it in 3D, then show it on any printed image with Custom Marker."],
    "university:*:1": ["Make your project interactive", "Use Visual Coding so objects move, react, and respond to people."],
    "university:*:2": ["Create custom 3D objects in minutes", "Turn an image or text into 3D with AI-3D Generation, with or without animation."],

    "lecturer:0:0": ["Show your research in 3D/AR", "Build a model in the Editor that people can turn, zoom, and view in AR."],
    "lecturer:1:0": ["Build a sample project to train educators with", "Learn the Editor yourself first, then walk others through it."],
    "lecturer:2:0": ["Show your students what 3D/AR can do", "Build a quick project and let them view it in AR on their phones."],
    "lecturer:3:0": ["Prototype a 3D/AR activity for your program", "Build it once in the Editor, then reuse it across your courses."],
    "lecturer:4:0": ["See what you can create in 3D/AR", "Build a quick project in the Editor and view it in AR in minutes."],
    "lecturer:5:0": ["Turn your idea into a 3D/AR project", "Build it in the Editor, then view it in AR."],
    "lecturer:*:1": ["Make books, posters, and products come alive", "Connect 3D/AR to a printed image with Custom Marker."],
    "lecturer:*:2": ["Create the 3D you need, even if it doesn't exist yet", "Turn an image or text into 3D or animated 3D with AI-3D Generation."],

    "other:0:0": ["Build an AR experience people can try on their phones", "Create it in the Editor, then view it in AR."],
    "other:1:0": ["Turn your content into 3D people can explore", "Build it in the Editor with ready-to-use 3D objects, then view it in AR."],
    "other:2:0": ["Build a 3D/AR project for your work", "Start fast in the Editor with ready-to-use 3D objects."],
    "other:3:0": ["Create 3D/AR your community can enjoy", "Build it in the Editor, then share one link everyone can open."],
    "other:4:0": ["Learn 3D/AR by making your first project", "Each step teaches you one part of the Editor."],
    "other:5:0": ["Bring your personal project to life in 3D", "Build it in the Editor, then view it in AR."],
    "other:6:0": ["Turn your idea into a 3D/AR project", "Build it in the Editor, then view it in AR."],
    "other:*:1": ["Make your prints and products come alive", "Show 3D/AR on a book, clothes, or a backdrop with Custom Marker."],
    "other:*:2": ["Create animated 3D from a picture or a few words", "Turn an image or text into 3D with animation using AI-3D Generation."]
  };

  /* What the user can do once a job is finished (the JTBD, said to them). */
  const DONE = {
    "Editor": ["Your project is ready to explore", (c) => `You built a 3D scene, published it, and viewed it in 3D and AR. ${cap(c.audience)} can open it the same way.`],
    "Visual Coding": ["Your game is ready to play", () => "You made objects move, react, and score, then played your game in 3D."],
    "Collaborate": ["You're building together", () => "Your classmate joined your project. Invite more people the same way, and everyone can publish and share."],
    "Edu Kits": ["You brought 3D/AR to life", () => "You found a ready-to-use project for your subject and viewed it in 3D and AR."],
    "Topic": ["Your lesson is ready to present", () => "You opened learning slides for your subject and presented them with 3D."],
    "Class": ["Your class is ready", () => "You set up a class, gave an assignment, and can see every student's project in one place."],
    "Publish and share (3D/AR viewer)": ["Everyone can explore your project", (c) => `You presented your project, and ${c.audience} can view it in 3D and AR on their phones.`],
    "AI-3D Generation": ["You created your own 3D object", () => "You turned an idea into a 3D object, added it to a project, and shared it."],
    "Editor + Custom Marker": ["Your project is on the page", () => "You built a 3D scene and made it appear on a printed Custom Marker. Anyone who scans it sees the same thing."],
    "Custom Marker": ["Your print just came alive", () => "You connected 3D/AR to a printed image, so it appears whenever someone scans it."]
  };

  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

  /* Coach-mark copy for each flow step. c = { role, noun, audience, together }. */
  const STEP = {
    "Create project": (c) => ({
      title: `Start your ${c.noun}`,
      body: c.together ? "Sit with your child and tap Create project. You'll open a blank scene to build in together." : "Every project starts with a blank scene. Tap Create project to open the Editor.",
      hint: "Tap Create project"
    }),
    "3D library": () => ({ title: "Find a 3D object", body: "The 3D library has ready-to-use objects for many subjects. Tap 3D library to choose one.", hint: "Tap 3D library" }),
    "Drop 3D object": (c) => ({
      title: "Place it in your scene",
      body: c.together ? "Let your child drag the planet onto the canvas. You can move, turn, and resize it anytime." : "Drag the planet onto the canvas. You can move, turn, and resize it anytime.",
      hint: "Drag the planet onto the canvas, or tap it"
    }),
    "Add garnish": (c) => ({ title: "Add a label that explains it", body: `A short title helps ${c.audience} understand what they're looking at. Tap Text, type a label, then tap Add.`, hint: "Type a label, then tap Add", open: "Tap Text" }),
    "Publish": (c) => ({ title: `Publish your ${c.noun}`, body: "Publishing saves a version others can open. Give it a name you'll recognize, then tap Publish.", hint: "Check the name, then tap Publish", open: "Tap Publish" }),
    "Publish the project": (c) => ({ title: `Publish your ${c.noun}`, body: "Publishing saves a version others can open. Give it a name you'll recognize, then tap Publish.", hint: "Check the name, then tap Publish", open: "Tap Publish" }),
    "Share": (c) => ({ title: `Share it with ${c.audience}`, body: "Tap Copy link, then send it however you like: chat, email, or your class group.", hint: "Tap Copy link" }),
    "Share the project": (c) => ({ title: `Share it with ${c.audience}`, body: "Tap Copy link, then send it however you like: chat, email, or a group.", hint: "Tap Copy link" }),
    "View in 3D and AR": () => ({ title: "See it in 3D, then in AR", body: "Drag to turn it around. Then tap View in AR to place it in your room with your phone.", hint: "Tap View in AR" }),
    "View in 3D": (c) => ({ title: "Play your game in 3D", body: `Tap the planet 3 times to score. This is exactly what ${c.audience} will see.`, hint: "Tap the planet 3 times to score" }),
    "Pick a Visual Coding template": () => ({ title: "Choose how your game plays", body: "Each template comes with ready-made blocks. Tap Visual Coding, pick one, then tap Use template. You can change the blocks later.", hint: "Pick a template, then tap Use template", open: "Tap Visual Coding" }),
    "Share the Collaborate link": () => ({ title: "Invite your classmates", body: "Tap Collaborate, then Copy invite link. Anyone with the link can join and build the project with you.", hint: "Tap Collaborate, then Copy invite link" }),
    "Another user joins": () => ({ title: "Dimas just joined", body: "You can see each other's cursors and changes as they happen. Invite more classmates the same way." }),
    "Open Edu Kits": () => ({ title: "Open Edu Kits", body: "Edu Kits has ready-to-use 3D/AR projects, so you can start without building anything. Tap Edu Kits to open it.", hint: "Tap Edu Kits" }),
    "Open Topic": () => ({ title: "Open Topic", body: "Topic has complete learning slides with 3D, ready to present in class. Tap Topic to open it.", hint: "Tap Topic" }),
    "Pick a subject and grade": (c) => ({
      title: "Choose a subject and grade",
      body: c.role === "educator" || c.role === "lecturer" ? "Pick one subject and one grade. We'll show what matches the class you teach." : "Pick one subject and one grade. We'll show what matches what you're learning.",
      hint: "Pick one subject and one grade"
    }),
    "Open a project": () => ({ title: "Open a project", body: "Every project is ready to use. Tap the first one to try it.", hint: "Tap the first project" }),
    "Open learning slides": () => ({ title: "Open a set of learning slides", body: "Each set takes your class through a lesson, start to finish. Tap the first set to preview it.", hint: "Tap the first set of slides" }),
    "The teacher presents the learning slides": () => ({ title: "Present to your class", body: "Tap Present to go full screen. Your class can watch the 3D turn as you explain.", hint: "Tap Present" }),
    "Create a Class and add materials": () => ({ title: "Create your class", body: "Tap Class, give it a name your students will recognize, then add your first material.", hint: "Type a name and pick a material", open: "Tap Class" }),
    "Invite students with the class code": () => ({ title: "Invite your students", body: "Students join with this 5-letter code. Tap Copy code, then share it in class or in your chat group.", hint: "Tap Copy code" }),
    "Give an assignment": () => ({ title: "Give your first assignment", body: "Tap New assignment, write what students should make, then tap Give assignment. They'll find it in Class.", hint: "Type a title, then tap Give assignment", open: "Tap New assignment" }),
    "See every student's project": () => ({ title: "See every project in one place", body: "Work shows up here as students turn it in. Open any project to view it in 3D." }),
    "Show it on screen, or share the link": (c) => ({ title: "Choose how to present", body: `Show it on the class screen, or share a link so ${c.audience} can explore on their own phones. Pick one, then tap Continue.`, hint: "Pick a way to present, then tap Continue" }),
    "Students open the link on their phones": () => ({ title: "Students open it on their phones", body: "The link opens your project in 3D, right in the phone's browser." }),
    "Assessors open the link on their phones": () => ({ title: "Assessors open it on their phones", body: "The link opens the project in 3D, right in the phone's browser." }),
    "View it in AR": () => ({ title: "Now view it in AR", body: "Tap View in AR to place the project on a desk or the floor.", hint: "Tap View in AR" }),
    "Upload an image or type a text": (c) => ({
      title: "Start with a picture or a few words",
      body: c.role === "parent" ? "Pick a photo of your child's drawing, or describe the object you want." : "Pick an image, or describe the object you want, like \u201ca hot-air balloon with stripes\u201d.",
      hint: "Pick an image or type a description"
    }),
    "Generate 3D": () => ({ title: "Turn it into 3D", body: "Tap Generate 3D. It can take a moment.", hint: "Tap Generate 3D" }),
    "Add it to the project": () => ({ title: "Add it to your project", body: "Your 3D object is ready. Tap Add to project to use it like any other object.", hint: "Tap Add to project" }),
    "Upload a Custom Marker photo": () => ({ title: "Choose your Custom Marker", body: "Pick the printed image your 3D/AR will appear on: a book page, a poster, or a product label. Then tap Use as Custom Marker.", hint: "Pick an image, then tap Use as Custom Marker", open: "Tap Custom Marker" }),
    "Scan the Custom Marker": () => ({ title: "Scan your Custom Marker", body: "Point your phone camera at the printed image. Tap Scan to try it.", hint: "Tap Scan" }),
    "View AR on top of the Custom Marker": () => ({ title: "There it is, on your Custom Marker", body: "Move the page and the 3D moves with it. Anyone who scans it sees the same thing." }),
    "View AR on top of the Custom Marker or the physical product": () => ({ title: "There it is, on your print", body: "Move the print and the 3D moves with it. Anyone who scans it sees the same thing." })
  };

  /* Short step names for chips and the step bar (data.js keeps the internal names). */
  const LABEL = {
    "Create project": "Create a project",
    "3D library": "Open the 3D library",
    "Drop 3D object": "Place a 3D object",
    "Add garnish": "Add a label",
    "Publish": "Publish",
    "Publish the project": "Publish",
    "Share": "Share the link",
    "Share the project": "Share the link",
    "View in 3D and AR": "View in 3D and AR",
    "View in 3D": "Play it in 3D",
    "Pick a Visual Coding template": "Pick a game template",
    "Share the Collaborate link": "Invite classmates",
    "Another user joins": "Build together",
    "Open Edu Kits": "Open Edu Kits",
    "Open Topic": "Open Topic",
    "Pick a subject and grade": "Pick a subject and grade",
    "Open a project": "Open a project",
    "Open learning slides": "Open learning slides",
    "The teacher presents the learning slides": "Present to your class",
    "Create a Class and add materials": "Create a class",
    "Invite students with the class code": "Invite students",
    "Give an assignment": "Give an assignment",
    "See every student's project": "See student projects",
    "Show it on screen, or share the link": "Choose how to present",
    "Students open the link on their phones": "Students open it",
    "Assessors open the link on their phones": "Assessors open it",
    "View it in AR": "View in AR",
    "Upload an image or type a text": "Add an image or text",
    "Generate 3D": "Generate 3D",
    "Add it to the project": "Add it to a project",
    "Upload a Custom Marker photo": "Choose a Custom Marker",
    "Scan the Custom Marker": "Scan it",
    "View AR on top of the Custom Marker": "See it in AR",
    "View AR on top of the Custom Marker or the physical product": "See it in AR"
  };
  const label = (name) => LABEL[name] || name;

  /* Welcome photos (from the setup-moment prototype) per role and feature. */
  const ART = {
    student: { "Editor": "student-create", "Edu Kits": "student-create", "Visual Coding": "student-code", "Collaborate": "student-collab" },
    educator: { "Topic": "teacher-slides", "Editor": "teacher-present", "Edu Kits": "practice", "Publish and share (3D/AR viewer)": "practice", "Class": "teacher-class" },
    parent: { "Editor": "parent-create", "Edu Kits": "parent-create", "Visual Coding": "parent-code", "AI-3D Generation": "parent-ai" },
    university: { "Editor + Custom Marker": "uni-create", "Visual Coding": "uni-collab", "AI-3D Generation": "uni-ai" },
    lecturer: { "Editor": "lecturer-create", "Custom Marker": "lecturer-ar", "AI-3D Generation": "creator-ai" },
    other: { "Editor": "creator-cover", "Custom Marker": "creator-usecases", "AI-3D Generation": "creator-ai" }
  };
  function art(role, mi, feature) {
    const name = role === "student" && mi === 0 && feature === "Collaborate" ? "student-collab-kids" : (ART[role] || ART.other)[feature] || "editor";
    return `assets/welcome/welcome-${name}.jpg`;
  }

  function job(role, mi, si) {
    return JOBS[`${role}:${mi}:${si}`] || JOBS[`${role}:*:${si}`] || ["Create a 3D/AR project", "Build it in the Editor, then view it in AR."];
  }

  function ctx(role, mi) {
    return {
      role,
      noun: (NOUN[role] || NOUN.other)[mi] || "project",
      audience: (AUDIENCE[role] || AUDIENCE.other)[mi] || "your audience",
      together: role === "parent"
    };
  }

  window.OB_COPY = { ROLES, CHECKLIST_TITLE, DONE, STEP, art, job, ctx, cap, label };
})();

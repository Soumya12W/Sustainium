<script lang='ts'>
    import eventcover from '$lib/assets/eventcover.jpg';
    import { onMount } from 'svelte';
    import Modal from '$lib/components/shared/modal.svelte';
    import type { PageData } from './$types';
   

</script>
<section class="container py-20">
    <img class="w-full h-20 object-cover rounded-2xl" src={eventcover} style='height:200px' alt='cover'>
    <h1 class='text-center my-10 font-bold md:text-5xl sm:text-3xl '>Software Development Success</h1>
    <div class="video-container flex justify-center items-center">

        <iframe class='md:w-1/2 md:h-[400px] w-full h-[250px] ' title="vimeo-player" src="https://player.vimeo.com/video/6363388?h=73ce897dc4" width="640" height="400" frameborder="0" allowfullscreen></iframe>
    </div>
    <p class='text-lg px-4 mt-10'>Testing tables is very difficult with most tools. testRigor ensures that testing tables are just as stable as it is for a human. We will show how you can work with tables from the end-user perspective. There is no need to worry about how the table is built because implementation details don’t matter.

        Connie Lund: Welcome to testRigor’s Tips and Tricks session for test automation. Today we are going to talk about testing tables. And Artem Golubev is going to lead the session. He’s the CEO and founder of testRigor. There’ll be plenty of time to ask your questions, but you could put them in the chat, or you can put them in the questions, and we’ll be happy to answer those. 
        
        Next week, we will be talking about  automating form testing. We do this every Wednesday at this time. And then, the following week is testing drag and drop functionality. So with that, I give it over to Artem. 
        
        Artem Golubev: Hello and welcome. And I will be very quick today to show you a demo. So first, I would like to remind everyone what testRigor is. It uses plain English from end-users perspective to automate tests and In plain English, testRigor runs the tests in a manner similar to how manual testers would.
        
        Let me start sharing my screen, and for today, I will be doing a kickoff example, so we’ll be automating this table. As a public face, you can find tests or examples in table one; if anyone would like me to use anything else, I’d be happy to do so. Without further ado, I’ll get right into that. There are two ways you can deal with tables on testRigor. Number one way is using our relative locations. For example, if you were to delete this row containing this unique ID, we need to click on this Delete button. We can locate this based on this unique ID and this column name, or we can use a specific table construct where we can refer to rows and columns with tables on that; let me copy this one; let’s create a working table, and we will not create any automated tests and… Let’s create a new test suite.
        
        Okay, it being tested and now let’s do those four fields. So basically, what we do, first of all, we’ll click on this second icon, the second button concerning those actions, and SPK two. So first, let’s use relative locations. So it’s called relative locations, and they’ll click on the second button below “Actions” and on the right. There is another way of doing it. While it is executing, let us try another way of doing it. And that is the table language that would be a click on the second bottom in the context of the table column “Actions and row containing” spk two”.
        
        Okay, so let’s see if the first went through. So basically, it highlighted the actions here and step two is also here. It highlights what the intersection of those will be, and then the button and the same thing isn’t here. So there are two ways of how you can refer to elements in the table. 
        
        Here you can use table language similar to how it is outlined here. Or you can use relative locations. So now, one small thing I would like to point out here is that I didn’t just say below actions or completely below actions. And that is because even though, by default, completely below means whatever is really below that.
        
        However, if they do double reference when I say below and on the right, the assumption by default is as if it was the one section which is below referring to a section in some area in the form, and therefore it becomes roughly below meaning that somewhere below the cut line which we discussed in one part related to relative locations. So number four, to make it entirely below, it only should consider something that is what goes below that and not somewhere to the right or to the left. You have to specify completely to indicate that it is not a section. It is something you would like to intersect with. But other than that, it is the one on the right, and it will continue to function the same way regardless of how tests are rendered.
        
        All right, so that is the demo, any questions. Right, so what is the difference between completely below and roughly below? Excellent question. If you go to documentation. It’s a public page; we have reference to it from testRigor landing page, always look it up, and we go to a referencing locations section here. It goes into many details of what are the ways to reference location and then selecting elements that are across other elements. And here we describe both are different modifiers to the areas and completely below means that whatever is below should be overlapping with the target area, and  is at least 30%. So… Let me give you some examples.
        
        Let’s go to safeway.com and what will they like to say here, we want to click on sign in to add, below the featured items and roughly below the feature items that go. Okay if we had roughly below this particular case, we would be having no difference however, you’ll see how it is different based on the outline; how to time all right, let’s give it a second while it is executing this explanation, so if you’re saying completely below that will only apply to something which is exactly below. Here, an intersection should be at least 30% to be considered completely below.
        
        However, if you’re saying roughly below what we do is, we find this element, and below this element, we get a cutoff line, and anything which is below that cutoff line would be considered roughly below that would also apply to this button and the rest. So all of that would be roughly below; however, the one-button would be completely below. So this is the highlight. As you can see, we found the element, we highlighted what it mean to be completely below; this is a completely below option, which is the default.   
        Usually, if you use just one reference, it is found on that and the fee to the roughly below it’s the second, so as you can see here, in this case, roughly below means a much larger area because we found an element, and roughly below is anything that is below the cutoff line for this element. So that is the difference between roughly below and completely below.</p>
</section>
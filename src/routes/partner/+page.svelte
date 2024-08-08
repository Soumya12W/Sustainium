<script lang="ts">
	import { onMount } from 'svelte';
	import axios from 'axios';
	import handshake from '$lib/assets/partner/Hand shake Icon.png';
	import greensection from '$lib/assets/partner/Header image.png';
	import submiticon from '$lib/assets/partner/Submit Icon .svg';

	let email = '';
	let firstName = '';
	let lastName = '';
	let message = '';
	let recaptchaToken = '';

	function onSubmit(event: Event) {
		event.preventDefault();
		if (!recaptchaToken) {
			alert('Please complete the reCAPTCHA');
			return;
		}

		const formData = {
			email,
			firstName,
			lastName,
			message,
			recaptchaToken
		};

		axios
			.post(
				'https://app.nimble.com/api/v1/webforms/5b261c76cef070b143c79181/6696515412cb5577bd3baebf/responses',
				formData
			)
			.then((response) => {
				console.log('Form submitted successfully:', response.data);
				alert('Form submitted successfully');
				firstName = '';
				lastName = '';
				email = '';
				message = '';
				// Handle success response
			})
			.catch((error) => {
				console.error('Error submitting form:', error);
				firstName = '';
				lastName = '';
				email = '';
				message = '';
				// Handle error response
			});

		console.log(formData);
	}

	function onRecaptchaSuccess(token: string) {
		recaptchaToken = token;
	}

	onMount(() => {
		window.onRecaptchaSuccess = onRecaptchaSuccess;
	});
</script>

<div class="min-h-screen flex flex-col">
	<!-- Green Section -->
	<div class="bg-[#4CA76F] flex flex-col items-center text-center text-white pb-40 pt-24 relative">
		<img
			src={greensection}
			alt="Sustainium"
			class="absolute top-0 left-0 w-full h-full object-cover opacity-45"
		/>
		<div class="relative z-10 max-w-4xl mx-4 md:mx-auto">
			<h1 class="text-2xl md:text-4xl font-bold px-4 md:px-0">
				Let's Empower Sustainable Futures Together
			</h1>
			<p class="mt-4 text-sm md:text-base px-4 md:px-0">
				Sustainium collaborates with a range of organizations from technology providers, financial
				institutions, consultants, assurance providers, audit and certification service providers to
				NGOs & government agencies to build a greener future using AI. Join us as part of our
				Sustainium partner network for your region to become a sustainability leader, create a
				positive impact, and help your clients accelerate their sustainability journey.
			</p>
		</div>
	</div>

	<!-- Form Section -->
	<div class="flex justify-center py-12 -mt-32 mb-24">
		<div class="w-full lg:w-3/4 flex flex-col md:flex-row relative max-w-6xl">
			<div
				class="bg-[#2B2B2B] text-white p-8 w-full md:w-1/3 flex flex-col rounded-t-3xl md:pr-8 md:rounded-l-3xl relative"
			>
				<!-- Logo in white circle -->
				<div
					class="absolute top-4 left-1/2 transform -translate-x-1/2 md:top-10 md:left-6 md:transform-none w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex justify-center items-center"
				>
					<img src={handshake} alt="Logo" class="w-3/4 h-3/4 object-contain" />
				</div>

				<!-- Centered Content -->
				<div class="flex flex-col justify-center items-start text-left flex-grow mt-20 pr-10">
					<h2 class="text-4xl font-medium">
						Become a <span class="text-[#4CA76F]"><br />Partner</span> Now!
					</h2>
					<hr class="border-gray-400 w-full mt-4 mb-4" />
					<p class="text-sm md:text-base">
						Drive your carbon reduction initiatives with accurate insights and data-driven
						strategies. Join forces with Sustainium to drive sustainable impact.
					</p>
				</div>

				<!-- Icons at the Bottom -->
				<div class="flex justify-start space-x-4 mt-auto pb-8">
					<a
						href="https://www.linkedin.com/company/sustainiuminc/"
						target="_blank"
						rel="noopener noreferrer"
						class="text-white text-3xl"
					>
						<i class="ri-linkedin-fill"></i>
					</a>
				</div>
			</div>

			<!-- Right Column (White) -->
			<div class="bg-white w-full md:w-2/3 md:-ml-8 relative z-20 rounded-b-3xl md:rounded-3xl">
				<div class="px-14 pt-14">
					<h2 class="lg:text-4xl text-3xl font-bold mb-2">Connect with us</h2>
				</div>

				<div class="bg-white p-14 rounded-r-3xl shadow-md">
					<form on:submit|preventDefault={onSubmit} class="space-y-8">
						<div class="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
							<div class="w-full md:w-1/2">
								<input
									type="text"
									id="first-name"
									bind:value={firstName}
									placeholder="First Name"
									class="w-full border-b border-gray-300 bg-white mb-6 focus:outline-none pt-2 pb-2"
									required
								/>
							</div>
							<div class="w-full md:w-1/2">
								<input
									type="text"
									id="last-name"
									bind:value={lastName}
									placeholder="Last Name"
									class="w-full border-b border-gray-300 bg-white mb-6 focus:outline-none pt-2 pb-2"
									required
								/>
							</div>
						</div>
						<div class="mb-6">
							<input
								type="email"
								id="email"
								bind:value={email}
								placeholder="Email"
								class="w-full border-b border-gray-300 bg-white focus:outline-none mb-6 pt-2 pb-2"
								required
							/>
						</div>
						<div class="mb-8">
							<label for="message" class="text-gray-400">Message</label>
							<textarea
								id="message"
								bind:value={message}
								class="w-full p-2 mt-2 border border-gray-300 rounded-lg bg-white focus:outline-none "
							></textarea>
						</div> 
						  
						<!-- Additional Text Content -->
						<div class="mb-10 text-gray-600 text-sm">
							<p>
								We need the contact information you provide to us to share with you about our
								products and services. You may unsubscribe from these communications at any time.
								For information on how to unsubscribe, as well as our privacy practices and
								commitment to protecting your privacy, please review our
								<a href="/privacy-policy" class="text-blue-600 underline">Privacy Policy</a>.
							</p>
						</div>

						<!-- reCAPTCHA and Submit Button on the Same Line -->
						<div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
							<div
								class="g-recaptcha"
								data-sitekey="6LdooRMqAAAAAPZBZaGyFt8o7tQhH7hOnousTMdD"
								data-callback="onRecaptchaSuccess"
							></div>
							<button
								type="submit"
								class="bg-[#09aa69] text-black px-7 py-2 rounded-full flex items-center space-x-2"
							>
								<span class="text-md font-medium">Submit</span>
								<img src={submiticon} alt="Sustainium" class="w-4 h-4" />
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>

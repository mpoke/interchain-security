"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[457],{5610:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=i(5893),t=i(1151);const a={sidebar_position:5},o="Changeover Procedure",r={id:"consumer-development/changeover-procedure",title:"Changeover Procedure",description:"Chains that were not initially launched as consumers of replicated security can still participate in the protocol and leverage the economic security of the provider chain. The process where a standalone chain transitions to being a replicated consumer chain is called the changeover procedure and is part of the interchain security protocol. After the changeover, the new consumer chain will retain all existing state, including the IBC clients, connections and channels already established by the chain.",source:"@site/docs/consumer-development/changeover-procedure.md",sourceDirName:"consumer-development",slug:"/consumer-development/changeover-procedure",permalink:"/interchain-security/consumer-development/changeover-procedure",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Offboarding Checklist",permalink:"/interchain-security/consumer-development/offboarding"},next:{title:"Consumer Genesis Transformation",permalink:"/interchain-security/consumer-development/consumer-genesis-transformation"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"1. ConsumerAddition proposal submitted to the <code>provider</code> chain",id:"1-consumeraddition-proposal-submitted-to-the-provider-chain",level:3},{value:"2. upgrade proposal on standalone chain",id:"2-upgrade-proposal-on-standalone-chain",level:3},{value:"3. spawn time is reached",id:"3-spawn-time-is-reached",level:3},{value:"4. standalone chain upgrade",id:"4-standalone-chain-upgrade",level:3},{value:"Notes",id:"notes",level:4},{value:"Onboarding Checklist",id:"onboarding-checklist",level:2},{value:"1. Complete testing &amp; integration",id:"1-complete-testing--integration",level:2},{value:"2. Create an Onboarding Repository",id:"2-create-an-onboarding-repository",level:2},{value:"3. Submit a ConsumerChainAddition Governance Proposal to the provider",id:"3-submit-a-consumerchainaddition-governance-proposal-to-the-provider",level:2},{value:"3. Submit an Upgrade Proposal &amp; Prepare for Changeover",id:"3-submit-an-upgrade-proposal--prepare-for-changeover",level:2},{value:"4. Upgrade time \ud83d\ude80",id:"4-upgrade-time-",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",input:"input",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"changeover-procedure",children:"Changeover Procedure"}),"\n",(0,s.jsxs)(n.p,{children:["Chains that were not initially launched as consumers of replicated security can still participate in the protocol and leverage the economic security of the provider chain. The process where a standalone chain transitions to being a replicated consumer chain is called the ",(0,s.jsx)(n.strong,{children:"changeover procedure"})," and is part of the interchain security protocol. After the changeover, the new consumer chain will retain all existing state, including the IBC clients, connections and channels already established by the chain."]}),"\n",(0,s.jsx)(n.p,{children:"The relevant protocol specifications are available below:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/cosmos/ibc/blob/main/spec/app/ics-028-cross-chain-validation/overview_and_basic_concepts.md#channel-initialization-existing-chains",children:"ICS-28 with existing chains"}),"."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/interchain-security/adrs/adr-010-standalone-changeover",children:"ADR in ICS repo"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"Standalone to consumer changeover procedure can roughly be separated into 4 parts:"}),"\n",(0,s.jsxs)(n.h3,{id:"1-consumeraddition-proposal-submitted-to-the-provider-chain",children:["1. ConsumerAddition proposal submitted to the ",(0,s.jsx)(n.code,{children:"provider"})," chain"]}),"\n",(0,s.jsx)(n.p,{children:'The proposal is equivalent to the "normal" ConsumerAddition proposal submitted by new consumer chains.'}),"\n",(0,s.jsx)(n.p,{children:"However, here are the most important notes and differences between a new consumer chain and a standalone chain performing a changeover:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"chain_id"})," must be equal to the standalone chain id"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"initial_height"})," field has additional rules to abide by:"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n...\n    "initial_height" : {\n        // must correspond to current revision number of standalone chain\n        // e.g. stride-1 => "revision_number": 1\n        "revision_number": 1,\n\n        // must correspond to a height that is at least 1 block after the upgrade\n        // that will add the `consumer` module to the standalone chain\n        // e.g. "upgrade_height": 100 => "revision_height": 101\n        "revision_height": 1,\n    },\n...\n}\n'})}),(0,s.jsx)(n.p,{children:"RevisionNumber: 0, RevisionHeight: 111"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"genesis_hash"})," can be safely ignored because the chain is already running. A hash of the standalone chain's initial genesis may be used"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"binary_hash"})," may not be available ahead of time. All chains performing the changeover go through rigorous testing - if bugs are caught and fixed the hash listed in the proposal may not be the most recent one."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"spawn_time"})," listed in the proposal MUST be before the ",(0,s.jsx)(n.code,{children:"upgrade_height"})," listed in the upgrade proposal on the standalone chain."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"spawn_time"})," must occur before the ",(0,s.jsx)(n.code,{children:"upgrade_height"})," on the standalone chain is reached because the ",(0,s.jsx)(n.code,{children:"provider"})," chain must generate the ",(0,s.jsx)(n.code,{children:"ConsumerGenesis"})," that contains the ",(0,s.jsx)(n.strong,{children:"validator set"})," that will be used after the changeover."]})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"unbonding_period"})," must correspond to the value used on the standalone chain. Otherwise, the clients used for the ccv protocol may be incorrectly initialized."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"distribution_transmission_channel"})," ",(0,s.jsx)(n.strong,{children:"should be set"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["Populating ",(0,s.jsx)(n.code,{children:"distribution_transmission_channel"})," will enable the standalone chain to reuse one of the existing channels to the provider for consumer chain rewards distribution. This will preserve the ",(0,s.jsx)(n.code,{children:"ibc denom"})," that may already be in use."]}),(0,s.jsx)(n.p,{children:"If the parameter is not set, a new channel will be created."})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ccv_timeout_period"})," has no important notes"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"transfer_timeout_period"})," has no important notes"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"consumer_redistribution_fraction"})," has no important notes"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"blocks_per_distribution_transmission"})," has no important notes"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"historical_entries"})," has no important notes"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"2-upgrade-proposal-on-standalone-chain",children:"2. upgrade proposal on standalone chain"}),"\n",(0,s.jsxs)(n.p,{children:["The standalone chain creates an upgrade proposal to include the ",(0,s.jsx)(n.code,{children:"interchain-security/x/ccv/consumer"})," module."]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsxs)(n.p,{children:["The upgrade height in the proposal should correspond to a height that is after the ",(0,s.jsx)(n.code,{children:"spawn_time"})," in the consumer addition proposal submitted to the ",(0,s.jsx)(n.code,{children:"provider"})," chain."]})}),"\n",(0,s.jsx)(n.p,{children:"Otherwise, the upgrade is indistinguishable from a regular on-chain upgrade proposal."}),"\n",(0,s.jsx)(n.h3,{id:"3-spawn-time-is-reached",children:"3. spawn time is reached"}),"\n",(0,s.jsxs)(n.p,{children:["When the ",(0,s.jsx)(n.code,{children:"spawn_time"})," is reached on the ",(0,s.jsx)(n.code,{children:"provider"})," it will generate a ",(0,s.jsx)(n.code,{children:"ConsumerGenesis"})," that contains the validator set that will supersede the ",(0,s.jsx)(n.code,{children:"standalone"})," validator set."]}),"\n",(0,s.jsxs)(n.p,{children:["This ",(0,s.jsx)(n.code,{children:"ConsumerGenesis"})," must be available on the standalone chain during the on-chain upgrade."]}),"\n",(0,s.jsx)(n.h3,{id:"4-standalone-chain-upgrade",children:"4. standalone chain upgrade"}),"\n",(0,s.jsxs)(n.p,{children:["Performing the on-chain upgrade on the standalone chain will add the ",(0,s.jsx)(n.code,{children:"ccv/consumer"})," module and allow the chain to become a ",(0,s.jsx)(n.code,{children:"consumer"})," of replicated security."]}),"\n",(0,s.jsxs)(n.admonition,{type:"caution",children:[(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"ConsumerGenesis"})," must be exported to a file and placed in the correct folder on the standalone chain before the upgrade."]}),(0,s.jsx)(n.p,{children:"The file must be placed at the exact specified location, otherwise the upgrade will not be executed correctly."}),(0,s.jsxs)(n.p,{children:["Usually the file is placed in ",(0,s.jsx)(n.code,{children:"$NODE_HOME/config"}),", but the file name and the exact directory is dictated by the upgrade code on the ",(0,s.jsx)(n.code,{children:"standalone"})," chain."]}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["please check exact instructions provided by the ",(0,s.jsx)(n.code,{children:"standalone"})," chain team"]}),"\n"]})]}),"\n",(0,s.jsxs)(n.p,{children:["After the ",(0,s.jsx)(n.code,{children:"genesis.json"})," file has been made available, the process is equivalent to a normal on-chain upgrade. The standalone validator set will sign the next couple of blocks before transferring control to ",(0,s.jsx)(n.code,{children:"provider"})," validator set."]}),"\n",(0,s.jsxs)(n.p,{children:["The standalone validator set can still be slashed for any infractions if evidence is submitted within the ",(0,s.jsx)(n.code,{children:"unboding_period"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"notes",children:"Notes"}),"\n",(0,s.jsx)(n.p,{children:"The changeover procedure may be updated in the future to create a seamless way of providing the validator set information to the standalone chain."}),"\n",(0,s.jsx)(n.h2,{id:"onboarding-checklist",children:"Onboarding Checklist"}),"\n",(0,s.jsxs)(n.p,{children:["This onboarding checklist is slightly different from the one under ",(0,s.jsx)(n.a,{href:"/interchain-security/consumer-development/onboarding",children:"Onboarding"})]}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, you can check the ",(0,s.jsx)(n.a,{href:"https://github.com/cosmos/testnets/blob/master/replicated-security/CONSUMER_LAUNCH_GUIDE.md",children:"testnet repo"})," for a comprehensive guide on preparing and launching consumer chains."]}),"\n",(0,s.jsx)(n.h2,{id:"1-complete-testing--integration",children:"1. Complete testing & integration"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","test integration with gaia"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","test your protocol with supported relayer versions (minimum hermes 1.4.1)"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","test the changeover procedure"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","reach out to the ICS team if you are facing issues"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"2-create-an-onboarding-repository",children:"2. Create an Onboarding Repository"}),"\n",(0,s.jsx)(n.p,{children:"To help validators and other node runners onboard onto your chain, please prepare a repository with information on how to run your chain."}),"\n",(0,s.jsx)(n.p,{children:"This should include (at minimum):"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","genesis.json with CCV data (after spawn time passes). Check if CCV data needs to be transformed (see ",(0,s.jsx)(n.a,{href:"/interchain-security/consumer-development/consumer-genesis-transformation",children:"Transform Consumer Genesis"}),")"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","information about relevant seed/peer nodes you are running"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","relayer information (compatible versions)"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","copy of your governance proposal (as JSON)"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","a script showing how to start your chain and connect to peers (optional)"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","take feedback from other developers, validators and community regarding your onboarding repo and make improvements where applicable"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Example of such a repository can be found ",(0,s.jsx)(n.a,{href:"https://github.com/hyphacoop/ics-testnets/tree/main/game-of-chains-2022/sputnik",children:"here"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"3-submit-a-consumerchainaddition-governance-proposal-to-the-provider",children:"3. Submit a ConsumerChainAddition Governance Proposal to the provider"}),"\n",(0,s.jsxs)(n.p,{children:["Before you submit a ",(0,s.jsx)(n.code,{children:"ConsumerChainAddition"})," proposal, please provide a ",(0,s.jsx)(n.code,{children:"spawn_time"})," that is ",(0,s.jsx)(n.strong,{children:"before"})," the ",(0,s.jsx)(n.code,{children:"upgrade_height"})," of the upgrade that will introduce the ",(0,s.jsx)(n.code,{children:"ccv module"})," to your chain."]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.code,{children:"spawn_time"})," happens after your ",(0,s.jsx)(n.code,{children:"upgrade_height"})," the provider will not be able to communicate the new validator set to be used after the changeover."]})}),"\n",(0,s.jsxs)(n.p,{children:["Additionally, reach out to the community via the ",(0,s.jsx)(n.a,{href:"https://forum.cosmos.network/",children:"forum"})," to formalize your intention to become an ICS consumer, gather community support and accept feedback from the community, validators and developers."]}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","determine your chain's spawn time"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","determine consumer chain parameters to be put in the proposal"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","take note to include a link to your onboarding repository"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Example of a consumer chain addition proposal."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// ConsumerAdditionProposal is a governance proposal on the provider chain to spawn a new consumer chain or add a standalone chain.\n// If it passes, then all validators on the provider chain are expected to validate the consumer chain at spawn time.\n// It is recommended that spawn time occurs after the proposal end time and that it is scheduled to happen before the standalone chain upgrade\n// that sill introduce the ccv module.\n{\n    // Title of the proposal\n    "title": "Changeover Standalone chain",\n    // Description of the proposal\n    // format the text as a .md file and include the file in your onboarding repository\n    "description": ".md description of your chain and all other relevant information",\n    // Proposed chain-id of the new consumer chain.\n    // Must be unique from all other consumer chain ids of the executing provider chain.\n    "chain_id": "standalone-1",\n    // Initial height of new consumer chain.\n    // For a completely new chain, this will be {0,1}.\n    "initial_height" : {\n        // must correspond to current revision number of standalone chain\n        // e.g. standalone-1 => "revision_number": 1\n        "revision_number": 1,\n\n        // must correspond to a height that is at least 1 block after the upgrade\n        // that will add the `consumer` module to the standalone chain\n        // e.g. "upgrade_height": 100 => "revision_height": 101\n        "revision_number": 1,\n    },\n    // Hash of the consumer chain genesis state without the consumer CCV module genesis params.\n    // => not relevant for changeover procedure\n    "genesis_hash": "d86d756e10118e66e6805e9cc476949da2e750098fcc7634fd0cc77f57a0b2b0",\n    // Hash of the consumer chain binary that should be run by validators on standalone chain upgrade\n    // => not relevant for changeover procedure as it may become stale\n    "binary_hash": "376cdbd3a222a3d5c730c9637454cd4dd925e2f9e2e0d0f3702fc922928583f1",\n    // Time on the provider chain at which the consumer chain genesis is finalized and all validators\n    // will be responsible for starting their consumer chain validator node.\n    "spawn_time": "2023-02-28T20:40:00.000000Z",\n    // Unbonding period for the consumer chain.\n    // It should should be smaller than that of the provider.\n    "unbonding_period": 86400000000000,\n    // Timeout period for CCV related IBC packets.\n    // Packets are considered timed-out after this interval elapses.\n    "ccv_timeout_period": 259200000000000,\n    // IBC transfer packets will timeout after this interval elapses.\n    "transfer_timeout_period": 1800000000000,\n    // The fraction of tokens allocated to the consumer redistribution address during distribution events.\n    // The fraction is a string representing a decimal number. For example "0.75" would represent 75%.\n    // The reward amount distributed to the provider is calculated as: 1 - consumer_redistribution_fraction.\n    "consumer_redistribution_fraction": "0.75",\n    // BlocksPerDistributionTransmission is the number of blocks between IBC token transfers from the consumer chain to the provider chain.\n    // eg. send rewards to the provider every 1000 blocks\n    "blocks_per_distribution_transmission": 1000,\n    // The number of historical info entries to persist in store.\n    // This param is a part of the cosmos sdk staking module. In the case of\n    // a ccv enabled consumer chain, the ccv module acts as the staking module.\n    "historical_entries": 10000,\n    // The ID of a token transfer channel used for the Reward Distribution\n\t// sub-protocol. If DistributionTransmissionChannel == "", a new transfer\n\t// channel is created on top of the same connection as the CCV channel.\n\t// Note that transfer_channel_id is the ID of the channel end on the consumer chain.\n    // it is most relevant for chains performing a standalone to consumer changeover\n    // in order to maintain the existing ibc transfer channel\n    "distribution_transmission_channel": "channel-123"  // NOTE: use existing transfer channel if available\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"3-submit-an-upgrade-proposal--prepare-for-changeover",children:"3. Submit an Upgrade Proposal & Prepare for Changeover"}),"\n",(0,s.jsxs)(n.p,{children:["This proposal should add the ccv ",(0,s.jsx)(n.code,{children:"consumer"})," module to your chain."]}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","proposal ",(0,s.jsx)(n.code,{children:"upgrade_height"})," must happen after ",(0,s.jsx)(n.code,{children:"spawn_time"})," in the ",(0,s.jsx)(n.code,{children:"ConsumerAdditionProposal"})]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","advise validators about the exact procedure for your chain and point them to your onboarding repository"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"4-upgrade-time-",children:"4. Upgrade time \ud83d\ude80"}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","after ",(0,s.jsx)(n.code,{children:"spawn_time"}),", request ",(0,s.jsx)(n.code,{children:"ConsumerGenesis"})," from the ",(0,s.jsx)(n.code,{children:"provider"})," and place it in ",(0,s.jsx)(n.code,{children:"<CURRENT_USER_HOME_DIR>/.sovereign/config/genesis.json"})]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","upgrade the binary to the one listed in your ",(0,s.jsx)(n.code,{children:"UpgradeProposal"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:['The chain starts after at least 66.67% of standalone voting power comes online. The consumer chain is considered interchain secured once the "old" validator set signs a couple of blocks and transfers control to the ',(0,s.jsx)(n.code,{children:"provider"})," validator set."]}),"\n",(0,s.jsxs)(n.ul,{className:"contains-task-list",children:["\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","provide a repo with onboarding instructions for validators (it should already be listed in the proposal)"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","genesis.json after ",(0,s.jsx)(n.code,{children:"spawn_time"})," obtained from ",(0,s.jsx)(n.code,{children:"provider"})," (MUST contain the initial validator set)"]}),"\n",(0,s.jsxs)(n.li,{className:"task-list-item",children:[(0,s.jsx)(n.input,{type:"checkbox",disabled:!0})," ","maintenance & emergency contact info (relevant discord, telegram, slack or other communication channels)"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>o});var s=i(7294);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);
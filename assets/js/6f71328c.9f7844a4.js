"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[560],{9371:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var i=o(5893),s=o(1151);const t={sidebar_position:14,title:"Slashing on the provider for consumer equivocation"},a="ADR 013: Slashing on the provider for consumer equivocation",r={id:"adrs/adr-013-equivocation-slashing",title:"Slashing on the provider for consumer equivocation",description:"Changelog",source:"@site/docs/adrs/adr-013-equivocation-slashing.md",sourceDirName:"adrs",slug:"/adrs/adr-013-equivocation-slashing",permalink:"/interchain-security/adrs/adr-013-equivocation-slashing",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14,title:"Slashing on the provider for consumer equivocation"},sidebar:"tutorialSidebar",previous:{title:"Separate Releasing",permalink:"/interchain-security/adrs/adr-012-separate-releasing"},next:{title:"Epochs",permalink:"/interchain-security/adrs/adr-014-epochs"}},h={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Status",id:"status",level:2},{value:"Context",id:"context",level:2},{value:"Single-chain slashing",id:"single-chain-slashing",level:3},{value:"Slashing undelegations and redelegations",id:"slashing-undelegations-and-redelegations",level:4},{value:"Slashing delegations",id:"slashing-delegations",level:4},{value:"Old evidence",id:"old-evidence",level:4},{value:"Slashing for equivocation on the consumer",id:"slashing-for-equivocation-on-the-consumer",level:3},{value:"Proposed solution",id:"proposed-solution",level:2},{value:"Implementation",id:"implementation",level:3},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"References",id:"references",level:2}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"adr-013-slashing-on-the-provider-for-consumer-equivocation",children:"ADR 013: Slashing on the provider for consumer equivocation"}),"\n",(0,i.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"1st Sept. 2023: Initial draft"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,i.jsx)(n.p,{children:"Accepted"}),"\n",(0,i.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,i.jsxs)(n.p,{children:["This ADR presents some approaches on how to slash on the provider chain validators that performed equivocations on consumer chains.\nCurrently, the provider chain can ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/interchain-security/pull/1232",children:"receive and verify evidence of equivocation"}),", but it cannot slash the misbehaving validator."]}),"\n",(0,i.jsx)(n.p,{children:"In the remainder of this section, we explain how slashing is performed on a single chain and show why slashing on the provider for equivocation on the consumer is challenging."}),"\n",(0,i.jsxs)(n.p,{children:["Note that future versions of the Cosmos SDK, CometBFT, and ibc-go could modify the way we slash, etc. Therefore, a future reader of this ADR, should note that when we refer to Cosmos SDK, CometBFT, and ibc-go we specifically refer to their ",(0,i.jsx)(n.a,{href:"https://docs.cosmos.network/v0.47/intro/overview",children:"v0.47"}),",  ",(0,i.jsx)(n.a,{href:"https://docs.cometbft.com/v0.37/",children:"v0.37"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.3.0",children:"v7.3.0"})," versions respectively."]}),"\n",(0,i.jsx)(n.h3,{id:"single-chain-slashing",children:"Single-chain slashing"}),"\n",(0,i.jsxs)(n.p,{children:["Slashing is implemented across the ",(0,i.jsx)(n.a,{href:"https://docs.cosmos.network/v0.47/modules/slashing",children:"slashing"}),"\nand ",(0,i.jsx)(n.a,{href:"https://docs.cosmos.network/v0.47/modules/staking",children:"staking"})," modules.\nThe slashing module's keeper calls the staking module's ",(0,i.jsx)(n.code,{children:"Slash()"})," method, passing among others, the ",(0,i.jsx)(n.code,{children:"infractionHeight"})," (i.e., the height when the equivocation occurred), the validator's ",(0,i.jsx)(n.code,{children:"power"})," at the infraction height, and the ",(0,i.jsx)(n.code,{children:"slashFactor"})," (currently set to ",(0,i.jsx)(n.code,{children:"5%"})," in case of equivocation on the Cosmos Hub)."]}),"\n",(0,i.jsx)(n.h4,{id:"slashing-undelegations-and-redelegations",children:"Slashing undelegations and redelegations"}),"\n",(0,i.jsxs)(n.p,{children:["To slash undelegations, ",(0,i.jsx)(n.code,{children:"Slash"})," goes through all undelegations and checks whether they started before or after the infraction occurred. If an undelegation started before the ",(0,i.jsx)(n.code,{children:"infractionHeight"}),", then it is ",(0,i.jsx)(n.strong,{children:"not"})," slashed, otherwise it is slashed by ",(0,i.jsx)(n.code,{children:"slashFactor"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["The slashing of redelegations happens in a similar way, meaning that ",(0,i.jsx)(n.code,{children:"Slash"})," goes through all redelegations and checks whether the redelegations started before or after the ",(0,i.jsx)(n.code,{children:"infractionHeight"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"slashing-delegations",children:"Slashing delegations"}),"\n",(0,i.jsxs)(n.p,{children:["Besides undelegations and redelegations, the validator's delegations need to also be slashed.\nThis is performed by deducting the appropriate amount of tokens from the validator. Note that this deduction is computed based on the voting ",(0,i.jsx)(n.code,{children:"power"})," the misbehaving validator had at the height of the equivocation. As a result of the tokens deduction,\nthe ",(0,i.jsx)(n.a,{href:"https://docs.cosmos.network/v0.47/modules/staking#delegator-shares",children:"tokens per share"}),"\nreduce and hence later on, when delegators undelegate or redelegate, the delegators retrieve back less\ntokens, effectively having their tokens slashed. The rationale behind this slashing mechanism, as mentioned in the ",(0,i.jsx)(n.a,{href:"https://docs.cosmos.network/v0.47/modules/staking#delegator-shares",children:"Cosmos SDK documentation"})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"[...] is to simplify the accounting around slashing. Rather than iteratively slashing the tokens of every delegation entry, instead the Validators total bonded tokens can be slashed, effectively reducing the value of each issued delegator share."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This approach of slashing delegations does not utilize the\n",(0,i.jsx)(n.code,{children:"infractionHeight"})," in any way and hence the following scenario could occur:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["a validator ",(0,i.jsx)(n.code,{children:"V"})," performs an equivocation at a height ",(0,i.jsx)(n.code,{children:"Hi"})]}),"\n",(0,i.jsxs)(n.li,{children:["a new delegator ",(0,i.jsx)(n.code,{children:"D"})," delegates to ",(0,i.jsx)(n.code,{children:"V"})," after height ",(0,i.jsx)(n.code,{children:"Hi"})]}),"\n",(0,i.jsxs)(n.li,{children:["evidence of the equivocation by validator ",(0,i.jsx)(n.code,{children:"V"})," is received"]}),"\n",(0,i.jsxs)(n.li,{children:["the tokens of delegator ",(0,i.jsx)(n.code,{children:"D"})," are slashed"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["In the above scenario, delegator ",(0,i.jsx)(n.code,{children:"D"})," is slashed, even though ",(0,i.jsx)(n.code,{children:"D"}),"'s voting power did not contribute to the infraction."]}),"\n",(0,i.jsx)(n.h4,{id:"old-evidence",children:"Old evidence"}),"\n",(0,i.jsxs)(n.p,{children:["In the single-chain case, old evidence (e.g., from 3 years ago) is ignored. This is achieved through\n",(0,i.jsx)(n.a,{href:"https://docs.cometbft.com/v0.37/spec/consensus/evidence",children:"CometBFT"})," that ignores old evidence based on the parameters ",(0,i.jsx)(n.code,{children:"MaxAgeNumBlocks"})," and ",(0,i.jsx)(n.code,{children:"MaxAgeDuration"})," (see ",(0,i.jsx)(n.a,{href:"https://github.com/cometbft/cometbft/blob/v0.37.0/evidence/pool.go#271",children:"here"}),").\nAdditionally, note that when the evidence is sent by CometBFT to the application, the evidence is rechecked in the ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0/x/evidence/keeper/infraction.go#L54",children:"evidence module"})," of Cosmos SDK and if it is old, the evidence is ignored.\nIn Cosmos Hub, the ",(0,i.jsx)(n.code,{children:"MaxAgeNumBlocks"})," is set to 1000000 (i.e., ~70 days if we assume we need ~6 sec per block) and ",(0,i.jsx)(n.code,{children:"MaxAgeDuration"})," is set to 172800000000000 ns (i.e., 2 days). Because of this check, we can easily exclude old evidence."]}),"\n",(0,i.jsx)(n.h3,{id:"slashing-for-equivocation-on-the-consumer",children:"Slashing for equivocation on the consumer"}),"\n",(0,i.jsxs)(n.p,{children:["In the single-chain case, slashing requires both the ",(0,i.jsx)(n.code,{children:"infractionHeight"})," and the voting ",(0,i.jsx)(n.code,{children:"power"}),".\nIn order to slash on the provider for an equivocation on a consumer, we need to have both the provider's ",(0,i.jsx)(n.code,{children:"infractionHeight"})," and voting ",(0,i.jsx)(n.code,{children:"power"}),".\nNote that the ",(0,i.jsx)(n.code,{children:"infractionHeight"})," on the consumer chain must be mapped to a height on the provider chain.\nUnless we have a way to find the corresponding ",(0,i.jsx)(n.code,{children:"infractionHeight"})," and ",(0,i.jsx)(n.code,{children:"power"})," on the provider chain, we cannot slash for equivocation on the consumer in the same way as we would slash in the single-chain case."]}),"\n",(0,i.jsxs)(n.p,{children:["The challenge of figuring out the corresponding ",(0,i.jsx)(n.code,{children:"infractionHeight"})," and ",(0,i.jsx)(n.code,{children:"power"})," values on the provider chain is due to the following trust assumption:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We trust the consensus layer and validator set of the consumer chains, ",(0,i.jsx)(n.em,{children:"but we do not trust the application layer"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["As a result, we cannot trust anything that stems from the ",(0,i.jsx)(n.em,{children:"application state"})," of a consumer chain."]}),"\n",(0,i.jsxs)(n.p,{children:["Note that when a relayer or a user sends evidence through a ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/interchain-security/pull/1232",children:"MsgSubmitConsumerDoubleVoting"})," message, the provider gets access to ",(0,i.jsx)(n.a,{href:"https://github.com/cometbft/cometbft/blob/v0.37.0/types/evidence.go#L35",children:"DuplicateVoteEvidence"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-protobuf",children:'type DuplicateVoteEvidence struct {\n\tVoteA *Vote `json:"vote_a"`\n\tVoteB *Vote `json:"vote_b"`\n\n\t// abci specific information\n\tTotalVotingPower int64\n\tValidatorPower   int64\n\tTimestamp        time.Time\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:['The "abci specific information" fields cannot be trusted because they are not signed. Therefore,\nwe can use neither ',(0,i.jsx)(n.code,{children:"ValidatorPower"})," for slashing on the provider chain, nor the ",(0,i.jsx)(n.code,{children:"Timestamp"})," to check the evidence age. We can get the ",(0,i.jsx)(n.code,{children:"infractionHeight"})," from the votes, but this ",(0,i.jsx)(n.code,{children:"infractionHeight"})," corresponds to the infraction height on the consumer and ",(0,i.jsx)(n.strong,{children:"not"})," on the provider chain.\nSimilarly, when a relayer or a user sends evidence through a ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/interchain-security/pull/826",children:"MsgSubmitConsumerMisbehaviour"})," message, the provider gets access to ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/ibc-go/blob/v7.3.0/proto/ibc/lightclients/tendermint/v1/tendermint.proto#L79",children:"Misbehaviour"})," that we cannot use to extract the infraction height, power, or the time on the provider chain."]}),"\n",(0,i.jsx)(n.h2,{id:"proposed-solution",children:"Proposed solution"}),"\n",(0,i.jsx)(n.p,{children:"As a first iteration, we propose the following approach. At the moment the provider receives evidence of equivocation on a consumer:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["slash all the undelegations and redelegations using ",(0,i.jsx)(n.code,{children:"slashFactor"}),";"]}),"\n",(0,i.jsxs)(n.li,{children:["slash all delegations using as voting ",(0,i.jsx)(n.code,{children:"power"})," the sum of the voting power of the misbehaving validator and the power of all the ongoing undelegations and redelegations."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Evidence expiration:"})," Additionally, because we cannot infer the actual time of the evidence (i.e., the timestamp of the evidence cannot be trusted), we do not consider ",(0,i.jsx)(n.em,{children:"evidence expiration"})," and hence old evidence is never ignored (e.g., the provider would act on 3 year-old evidence of equivocation on a consumer).\nAdditionally, we do not need to store equivocation evidence to avoid slashing a validator more than once, because we ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0/x/evidence/keeper/infraction.go#L94",children:"do not slash"})," tombstoned validators and we ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0/x/evidence/keeper/infraction.go#L138",children:"tombstone"})," a validator when slashed."]}),"\n",(0,i.jsxs)(n.p,{children:["We do not act on evidence that was signed by a validator ",(0,i.jsx)(n.a,{href:"https://tutorials.cosmos.network/tutorials/9-path-to-prod/3-keys.html#what-validator-keys",children:"consensus key"})," that is ",(0,i.jsx)(n.em,{children:"pruned"})," when we receive the evidence. We prune a validator's consensus key if the validator has assigned a new consumer key (using ",(0,i.jsx)(n.code,{children:"MsgAssignConsumerKey"}),") and an unbonding period on the consumer chain has elapsed (see ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/interchain-security/blob/main/docs/docs/adrs/adr-001-key-assignment.md",children:"key assignment ADR"}),"). Note that the provider chain is informed that the unbonding period has elapsed on the consumer when the provider receives a ",(0,i.jsx)(n.code,{children:"VSCMaturedPacket"})," and because of this, if the consumer delays the sending of a ",(0,i.jsx)(n.code,{children:"VSCMaturedPacket"}),", we would delay the pruning of the key as well."]}),"\n",(0,i.jsx)(n.h3,{id:"implementation",children:"Implementation"}),"\n",(0,i.jsxs)(n.p,{children:["The following logic needs to be added to the ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/interchain-security/pull/1232",children:"HandleConsumerDoubleVoting"})," and ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/interchain-security/pull/826",children:"HandleConsumerMisbehaviour"})," methods:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-go",children:"undelegationsInTokens := sdk.NewInt(0)\nfor _, v := range k.stakingKeeper.GetUnbondingDelegationsFromValidator(ctx, validatorAddress) {\n    for _, entry := range v.Entries {\n        if entry.IsMature(now) && !entry.OnHold() {\n            // undelegation no longer eligible for slashing, skip it\n            continue\n        }\n        undelegationsInTokens = undelegationsInTokens.Add(entry.InitialBalance)\n    }\n}\n\nredelegationsInTokens := sdk.NewInt(0)\nfor _, v := range k.stakingKeeper.GetRedelegationsFromSrcValidator(ctx, validatorAddress) {\n    for _, entry := range v.Entries {\n        if entry.IsMature(now) && !entry.OnHold() {\n            // redelegation no longer eligible for slashing, skip it\n            continue\n        }\n        redelegationsInTokens = redelegationsInTokens.Add(entry.InitialBalance)\n    }\n}\n\ninfractionHeight := 0\nundelegationsAndRedelegationsInPower = sdk.TokensToConsensusPower(undelegationsInTokens.Add(redelegationsInTokens))\ntotalPower := validator's voting power + undelegationsAndRedelegationsInPower\nslashFraction := k.slashingKeeper.SlashFractionDoubleSign(ctx)\n\nk.stakingKeeper.Slash(ctx, validatorConsAddress, infractionHeight, totalPower, slashFraction, DoubleSign)\n"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Infraction height:"})," We provide a zero ",(0,i.jsx)(n.code,{children:"infractionHeight"})," to the ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0/x/staking/keeper/slash.go#L33",children:"Slash"})," method in order to slash all ongoing undelegations and redelegations (see checks in ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0/x/staking/keeper/slash.go#L92",children:"Slash"}),", ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0/x/staking/keeper/slash.go#L195",children:"SlashUnbondingDelegation"}),", and ",(0,i.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/v0.47.0/x/staking/keeper/slash.go#L249",children:"SlashRedelegation"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Power:"})," We pass the sum of the voting power of the misbehaving validator when the evidence was received (i.e., at evidence height) and the power of all the ongoing undelegations and redelegations.\nIf we assume that the ",(0,i.jsx)(n.code,{children:"slashFactor"})," is ",(0,i.jsx)(n.code,{children:"5%"}),", then the voting power we pass is ",(0,i.jsx)(n.code,{children:"power + totalPower(undelegations) + totalPower(redelegations)"}),".\nHence, when the ",(0,i.jsx)(n.code,{children:"Slash"})," method slashes all the undelegations and redelegations it would end up with ",(0,i.jsx)(n.code,{children:"0.05 * power + 0.05 * totalPower(undelegations) + 0.05 * totalPower(redelegations) - 0.05 * totalPower(undelegations) - 0.05 * totalPower(redelegations) = 0.05 * power"})," and hence it would slash ",(0,i.jsx)(n.code,{children:"5%"})," of the validator's power when the evidence is received."]}),"\n",(0,i.jsx)(n.h3,{id:"positive",children:"Positive"}),"\n",(0,i.jsx)(n.p,{children:"With the proposed approach we can quickly implement slashing functionality on the provider chain for consumer chain equivocations.\nThis approach does not need to change the staking module and therefore does not change in any way how slashing is performed today for a single chain."}),"\n",(0,i.jsx)(n.h3,{id:"negative",children:"Negative"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["We ",(0,i.jsx)(n.em,{children:"definitely"})," slash more when it comes to undelegations and redelegations because we slash for all of them without considering an ",(0,i.jsx)(n.code,{children:"infractionHeight"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["We ",(0,i.jsx)(n.em,{children:"potentially"})," slash more than what we would have slashed if we knew the voting ",(0,i.jsx)(n.code,{children:"power"})," at the corresponding ",(0,i.jsx)(n.code,{children:"infractionHeight"})," in the provider chain."]}),"\n",(0,i.jsx)(n.li,{children:"We slash on old evidence of equivocation on a consumer."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cosmos/interchain-security/blob/main/docs/docs/adrs/adr-005-cryptographic-equivocation-verification.md",children:"ADR 005: Cryptographic verification of equivocation evidence"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/cosmos/interchain-security/issues/732",children:"EPIC tracking cryptographic equivocation feature"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://forum.cosmos.network/t/cryptographic-equivocation-slashing-design/11400",children:"Cosmos Hub Forum discussion on cryptographic equivocation slashing"})}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>a});var i=o(7294);const s={},t=i.createContext(s);function a(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);